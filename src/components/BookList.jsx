import { useContext } from "react";

import BookShow from "./BookShow";
import BooksContext from "../contexts/books";

function BookList() {
  const { books } = useContext(BooksContext);

  const renderBook = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="book-list">{renderBook}</div>;
}

export default BookList;
