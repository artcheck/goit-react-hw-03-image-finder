import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonLoadMore.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={styles.button}>
        Load more
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
