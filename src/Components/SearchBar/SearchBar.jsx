import css from "./SearchBar.module.css";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.inp}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
