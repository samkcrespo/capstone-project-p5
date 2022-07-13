import React, { useEffect, useState } from "react";
import BookDetails from "../BookDetails";
import SearchBar from "../SearchBar";
function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books")
      .then((res) => res.json())
      .then(setBooks);
  }, []);

  return (
    <div>
      <SearchBar />
      {books.map((book) => {
        return <BookDetails key={book.id} book={book} />;
      })}
    </div>
  );
}

export default Books;
