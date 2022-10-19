import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ items, onShowLargeImg }) => {
  return (
    <ImageGalleryList>
      {items.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            preview={webformatURL}
            alt={largeImageURL}
            url={largeImageURL}
            onShowLargeImg={onShowLargeImg}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  onShowLargeImg: PropTypes.func.isRequired,
};
