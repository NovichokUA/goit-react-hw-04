import { useState, useEffect } from "react";
import { SearchBar } from "./Components/SearchBar/SearchBar.jsx";
import { getImages } from "./api.js";

import "./App.css";

import { ImageGallery } from "./Components/ImageGallery/ImageGallery.jsx";

export function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        // setImages([]);

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
  };

  const handalLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <b>loading...</b>}
      {error && <b>Error</b>}
      {images.length > 0 && <ImageGallery dataImage={images} />}
      {images.length > 0 && <button onClick={handalLoadMore}>Load More</button>}
    </>
  );
}
