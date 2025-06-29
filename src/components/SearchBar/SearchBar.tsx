import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return toast.error("Input some text");
    onSubmit(value);

    setValue("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          onChange={handleChange}
          placeholder="Search images and photos"
          value={value}
        />
        <button className={css.button} type="submit">
          <HiMiniMagnifyingGlass className={css.icon} size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
