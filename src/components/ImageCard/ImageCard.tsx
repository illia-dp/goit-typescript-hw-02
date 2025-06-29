import { OpenModalType } from "../App/App.types";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  src: string;
  regular: string;
  alt: string;
  openModal: OpenModalType;
};

const ImageCard = ({ src, regular, alt, openModal }: ImageCardProps) => {
  return (
    <div className={css.thumb}>
      <img
        className={css.image}
        src={src}
        alt={alt}
        onClick={() => openModal({ src: regular, alt })}
      />
    </div>
  );
};

export default ImageCard;
