import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { search, update, getAll } from "./BooksAPI";
import defaultImage from "./images/default_img.jpg";

const SearchView = () => {
  
  const [searchInput, setSearchInput] = useState("");
  const [resultBooks, setResultBooks] = useState([]);
  const [owendBooks, setOwendBooks] = useState([]);

  useEffect(() => {
    getAll().then((books) => {
      setOwendBooks(books);
    });
  }, []);

  const dropdownOnChange = (event, bookID) => {
    update(bookID, event.target.value)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => console.log(err));
  };

  let filterTimeout;

  const searchOnChange = (event) => {

    if (event.target.value === "" ) {
      setResultBooks([])
      setSearchInput("")
      return
    }
 
    // if (!event.target.value) return setResultBooks([]);

    clearTimeout(filterTimeout);
    
    setSearchInput(event.target.value);

    filterTimeout = setTimeout(() => {
      search(searchInput, 300).then((searchReturnedBooks) => {
        if (searchReturnedBooks.length > 0) {
          for (let b = 0; b < searchReturnedBooks.length; b++) {
            
            searchReturnedBooks[b]["shelf"] = "none";

            for (let bo = 0; bo < owendBooks.length; bo++) {
              if (searchReturnedBooks[b].id === owendBooks[bo].id) {
                searchReturnedBooks[b]["shelf"] = owendBooks[bo].shelf;
              }
            }
          }

          setResultBooks(searchReturnedBooks);

        } else {
          console.log("No Data");
        }
      });
    }, 1000);

    
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/"> Close </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" value={searchInput}  onChange={searchOnChange} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {resultBooks?.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage:
                        "imageLinks" in book
                          ? `url("${book.imageLinks.thumbnail}")`
                          : `url(${defaultImage})`,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select
                      value={book.shelf}
                      onChange={(event) => dropdownOnChange(event, book)}
                    >
                      <option disabled>
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
                  {book.authors?.map((author) => (
                    <span key={author}>{author}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchView;
