import React, { Component } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { search: "" };

  handleChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}></button>

          <input
            className={styles.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={this.handleChange}
            name="search"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;