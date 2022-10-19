import { Component } from "react";
import * as API from '../API/Api';
import { Button } from "./Button/Button";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Box } from "./Box.styled";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    page: 1,
    pages: 0,
    query: '',
    items: [],
    isLoading: false,
    showModal: false,
  }

  handleSearchSubmit = (search) => {
    console.log(search.searchKey);
    this.setState({
      page: 1,
      query: search.searchKey,
      items: [],
    })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  toggleModal = imgData => {
    console.log(imgData);
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imgData,
    }));
  };


  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (prevState.page !== page || prevState.query !== query) {
      API.params.q = query;
      API.params.page = query !== prevState.query ? 1 : page;
      try {
        this.setState({ isLoading: true });
        const data = await API.getData(API.params);
        const { total, hits } = data;
        console.log(hits);

        if (query !== prevState.query) {
          this.setState({
            items: hits,
            total: total,
            pages: Math.ceil(total / API.params.per_page),
            isLoading: false,
          });
        } else {
          this.setState(prevState => ({
            items: [...prevState.items, ...hits],
            page: API.params.page,
            isLoading: false,
          }));
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { items, isLoading, showModal, imgData, page, pages } = this.state;
    return (
      <Box>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {isLoading && <Loader />}
        {items.length > 0 && <ImageGallery items={items} onShowLargeImg={this.toggleModal} />}
        {showModal && (
          <Modal data={imgData} onClose={this.toggleModal}>
            {/* <img alt={imgData.alt} src={imgData.url} /> */}
          </Modal>
        )}
        {items.length > 0 && page < pages && (<Button onLoadMore={this.loadMore} />)}
      </Box>
    );
  }
};
