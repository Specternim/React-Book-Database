import { useEffect } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]); 
  
  /*⬆️ React won't throw an error when we use vite to create the react-app. You'll need to check the Network tab
  to see those continuous re-renders when we define the dependency.
  */
  
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
