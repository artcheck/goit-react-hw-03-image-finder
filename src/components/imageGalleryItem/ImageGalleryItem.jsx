import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ item, openModal, modalImage }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItemImage}
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => openModal(modalImage)}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};