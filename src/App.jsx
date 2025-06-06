import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { getPhotos } from "./service/unsplashAPI";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPhotos(query, page);

        const { results, total_pages, total } = data;
        setTotalPages(total_pages);
        if (total === 0) {
          setError(
            "No images found for this query. Please try a different one."
          );
        }
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        setError("There was an error fetching the images");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
    setTotalPages(0);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const isLastPage = page === totalPages;

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <div className="container">
        {error && <ErrorMessage message={error} />}
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={handleOpenModal} />
        )}
        {images.length > 0 && !isLastPage && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={handleCloseModal}
          src={modalImage?.src}
          alt={modalImage?.alt}
        />
      </div>
    </>
  );
}

export default App;
