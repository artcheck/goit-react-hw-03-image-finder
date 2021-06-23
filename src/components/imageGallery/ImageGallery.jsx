import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ hits, openModal }) => {
  return (
    <ul className={styles.imageGallery}>
      {hits.map((item) => (
        <ImageGalleryItem
          key={item.id}
          item={item}
          openModal={openModal}
          modalImage={item.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};