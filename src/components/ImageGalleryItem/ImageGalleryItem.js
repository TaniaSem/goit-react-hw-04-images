import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  ImageGalleryElement,
  ImageGalleryImg,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ preview, alt, url }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLargeImg = () => {
    if (!showModal) {
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ImageGalleryElement
      onClick={() => {
        handleLargeImg();
      }}
    >
      {showModal && <Modal data={url} onClose={toggleModal} />}
      <ImageGalleryImg src={preview} alt={alt} />
    </ImageGalleryElement>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
