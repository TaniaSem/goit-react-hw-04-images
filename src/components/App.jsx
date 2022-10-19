import * as API from '../API/Api';
import { Button } from "./Button/Button";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Box } from "./Box.styled";
import { Loader } from "./Loader/Loader";
import { useState, useEffect } from "react";

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchSubmit = (search) => {
    console.log(search.searchKey);
    setPage(1);
    setQuery(search.searchKey);
    setItems([])
  }

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        const {hits} = await API.getData(query, page)
        setItems(prevState => [...prevState, ...hits])
      } catch (error) {
        alert('Something went wrong. Try again');
      } finally {setIsLoading(false)}
    }
    getImages()
  }, [query, page])

  const loadMore = () => {
    setPage(prevState => prevState + 1)
  }

   return (
      <Box>
        <Searchbar onSubmit={handleSearchSubmit} />
        {isLoading && <Loader />}
        {items.length > 0 && <ImageGallery items={items} />}
        
        {items.length > 0 && (<Button onLoadMore={loadMore} />)}
      </Box>
    );
}
