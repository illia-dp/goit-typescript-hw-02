import css from "./ImageCard.module.css";

const ImageCard = ({ src, regular, alt, openModal }) => {
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
