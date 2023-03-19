import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();

  const renderBook = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="book-list">{renderBook}</div>;
}

export default BookList;
