import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button className={css.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
