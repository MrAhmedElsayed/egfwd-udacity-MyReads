import React from "react";
import defaultImage from "./images/default_img.jpg";

const Book = ({ book, shelves, onUpdateBookShelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks.thumbnail
              ? `url("${book.imageLinks.thumbnail}")`
              : `url(${defaultImage})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf}
            onChange={(event) => onUpdateBookShelf(event, book)}
          >
            <option disabled> Move to...</option>
            {shelves.map((shelf) =>  <option key={shelf.id} value={shelf.shelfName}>{shelf.shelfDisplayName}</option> )}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors.length > 0
          ? book.authors.map((author) => <span key={author}>{author}</span>)
          : null}
      </div>
    </div>
  );
};

export default Book;
