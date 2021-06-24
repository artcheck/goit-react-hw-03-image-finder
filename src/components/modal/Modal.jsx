import React, { Component } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

class Modal extends Component {
  static propTypes = {
    modalImage: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.closeModal);
  }

  render() {
    return (
      <div onClick={this.props.closeModal} className={styles.overlay}>
        <div className={styles.modal}>
          <img src={this.props.modalImage} alt="img" />
        </div>
      </div>
    );
  }
}

export default Modal;
