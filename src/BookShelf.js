import React from "react";
import Book from "./Book";

const BookShelf = ({books}) => {
  
    const shelves = [
    { id: "1", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading"},
    { id: "2", shelfName: "wantToRead", shelfDisplayName: "Want To Read" },
    { id: "3", shelfName: "read", shelfDisplayName: "Read" },
  ];

  return (
    <div className="bookshelf">
      {shelves.map((s) => (
        <div key={s.id}>
          <h2 className="bookshelf-title">{s.shelfDisplayName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((f) => f.shelf === s.shelfName)
                .map((book) => (
                  <li key={book.id}>
                    <Book book={book} shelves={shelves} onUpdateBookShelf={onUpdateBookShelf} />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookShelf;
