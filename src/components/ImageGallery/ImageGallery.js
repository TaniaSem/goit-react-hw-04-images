import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryList>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            preview={webformatURL}
            alt={largeImageURL}
            url={largeImageURL}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
