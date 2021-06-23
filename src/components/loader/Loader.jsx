import React from "react";
import LoaderPictures from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <LoaderPictures
        type="Puff"
        color="#559fff"
        height={100}
        width={100}
        timeout={2000}
      />
    </div>
  );
};

export default Loader;