import css from "./LoadMore.module.css";

export const LoadMore = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load More
    </button>
  );
};
