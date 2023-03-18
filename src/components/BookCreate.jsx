import { useState, useContext } from "react";

import BooksContext from "../contexts/books";

function BookCreate() {
  const { createBook } = useContext(BooksContext);

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);

    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
          className="input"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
