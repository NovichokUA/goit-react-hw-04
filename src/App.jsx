import { useState, useEffect } from "react";
import { SearchBar } from "./Components/SearchBar/SearchBar.jsx";
import { getImages } from "./api.js";

import "./App.css";
import { Audio } from "react-loader-spinner";

import { ImageGallery } from "./Components/ImageGallery/ImageGallery.jsx";
import { ErrorMessage } from "./Components/ErrorMessage/ErrorMessage.jsx";
import { ModalWindow } from "./Components/Modal/ImageModal.jsx";

export function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getImages(query, page);
        setImages((prevData) => [...prevData, ...data]);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handalLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(image) {
    setmodalIsOpen(true);
    setSelectedCard(image);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setmodalIsOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery dataImage={images} onCardClick={openModal} />
      )}

      {selectedCard && (
        <ModalWindow
          modalIsOpen={modalIsOpen}
          valueCard={selectedCard}
          closeModal={closeModal}
        />
      )}

      {images.length > 0 && !isLoading && (
        <button onClick={handalLoadMore}>Load More</button>
      )}
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {error && <ErrorMessage />}
    </>
  );
}
