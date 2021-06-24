import axios from "axios";
import React, { Component } from "react";
import styled from "./App.module.css";
import Button from "./button/ButtonLoadMore";
import ImageGallery from "./imageGallery/ImageGallery";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";
import SearchBar from "./searchBar/SearchBar";

class App extends Component {
  state = {
    hits: [],
    error: null,
    loading: false,
    page: 1,
    isModalOpen: false,
    modalImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.handleSearchImg();
    }
  }

  handleSearchImg = async () => {
    const KEY = "21712762-74d2158a17681822641fd5e8e";
    const { page, search } = this.state;
    this.setState({ loading: true });
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12
`
      );
      this.setState((prevState) => ({
        hits: [...prevState.hits, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: "Something went wrong. Try again." });
    } finally {
      this.setState({ loading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  openModal = (modalImage) => {
    this.setState({ isModalOpen: true, modalImage });
  };

  closeModal = (evt) => {
    if (evt.target === evt.currentTarget || evt.key === "Escape")
      this.setState({ isModalOpen: false });
  };

  handleSubmit = (search) => {
    this.setState({ search, hits: [], page: 1 });
  };

  showMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { hits, loading, modalImage, isModalOpen } = this.state;
    return (
      <div className={styled.app}>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery hits={hits} openModal={this.openModal} />
        {!!hits.length && <Button onClick={this.showMore} />}
        {isModalOpen && (
          <Modal modalImage={modalImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
