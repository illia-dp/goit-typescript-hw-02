import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, alt_description, urls: { small, regular } }) => {
        return (
          <li className={css.galleryItems} key={id}>
            <ImageCard
              src={small}
              regular={regular}
              alt={alt_description}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
