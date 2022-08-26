import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import defaultImage from "./images/default_img.jpg";

const HomeView = () => {
  const [allBooks, setallBooks] = useState([]);

  const dropdownOnChange = (event, bookID) => {
    update(bookID, event.target.value)
      .then((resp) => {
        getAll().then((res) => {
          setallBooks(res);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAll().then((books) => {
      setallBooks(books);
    });
  }, []);

  const bookFilterByShelf = (bookArray, shelfName) => {
    const bookFilter = (books) => (shelf) =>
      books.filter((b) => b.shelf === shelf);
    const filterBy = bookFilter(bookArray);
    return filterBy(shelfName);
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookFilterByShelf(allBooks, "currentlyReading").map(
                    (book) => (
                      <li key={book.id}>
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
                                onChange={(event) =>
                                  dropdownOnChange(event, book)
                                }
                              >
                                <option value="none" disabled>
                                  Move to...
                                </option>
                                <option value="currentlyReading">
                                  Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">
                            {book.authors.length > 0
                              ? book.authors.map((author) => (
                                  <span key={author}>{author}</span>
                                ))
                              : null}
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookFilterByShelf(allBooks, "wantToRead").map((book) => (
                    <li key={book.id}>
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
                              onChange={(event) =>
                                dropdownOnChange(event, book)
                              }
                            >
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                          {book.authors.length > 0
                            ? book.authors.map((author) => (
                                <span key={author}>{author}</span>
                              ))
                            : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookFilterByShelf(allBooks, "read").map((book) => (
                    <li key={book.id}>
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
                              onChange={(event) =>
                                dropdownOnChange(event, book)
                              }
                            >
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                          {book.authors.length > 0
                            ? book.authors.map((author) => (
                                <span key={author}>{author}</span>
                              ))
                            : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
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
