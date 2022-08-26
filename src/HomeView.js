import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import BookShelf from "./BookShelf";

const HomeView = () => {
  const [allBooks, setallBooks] = useState([]);
  // thank you sir this helps!
  const handleShelfChange = (shelf, book) => {
    book.shelf = shelf.target.value;
    update(book, shelf.target.value)
      .then(() => {
        setallBooks([...allBooks.filter((b) => b.id !== book.id), book]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll().then((books) => {
      setallBooks(books);
    });
  }, []);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={allBooks} onUpdateBookShelf={handleShelfChange} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
