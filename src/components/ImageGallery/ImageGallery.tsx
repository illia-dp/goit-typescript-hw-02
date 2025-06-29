import ImageCard from "../ImageCard/ImageCard";
import { Image, OpenModalType } from "../App/App.types";
import css from "./ImageGallery.module.css";

type ImageGalleryProps = {
  images: Image[];
  openModal: OpenModalType;
};

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
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
