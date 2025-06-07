import css from "../ImageGallery/ImageGallery.module.css";
import Skeleton from "@mui/material/Skeleton";

const ImageCardSkeleton = () => {
  return (
    <ul className={css.gallery}>
      {Array(18)
        .fill()
        .map((_, index) => (
          <li className={css.galleryItems} key={index}>
            <Skeleton
              variant="rounded"
              width={360}
              height={200}
              animation={"wave"}
            />
          </li>
        ))}
    </ul>
  );
};

export default ImageCardSkeleton;
