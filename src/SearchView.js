import { useState, useMemo, useEffect } from "react";
// import debounce from "lodash.debounce";
import { debounce } from "lodash";
import defaultImage from "./images/default_img.jpg";
import { search, update, getAll } from "./BooksAPI";
import { Link } from "react-router-dom";

const SearchView = () => {
  const [query, setQuery] = useState("");
  const [resultBooks, setResultBooks] = useState([]);
  const [owendBooks, setOwendBooks] = useState([]);

  useEffect(() => {
    search(query, 50).then((response) => {
      if (response) {
        for (let b = 0; b < response.length; b++) {
          response[b]["shelf"] = "none";
          for (let bo = 0; bo < owendBooks.length; bo++) {
            if (response[b].id === owendBooks[bo].id) {
              response[b]["shelf"] = owendBooks[bo].shelf;
            }
          }
        }
        setResultBooks(response);
      } else {
        setResultBooks([]);
      }
    });
  }, [query]);



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

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 400);
  }, []);

  // if (query !== "") {
  //   search(query, 50).then((response) => {
  //     if (response) {
  //       for (let b = 0; b < response.length; b++) {
  //         response[b]["shelf"] = "none";
  //         for (let bo = 0; bo < owendBooks.length; bo++) {
  //           if (response[b].id === owendBooks[bo].id) {
  //             response[b]["shelf"] = owendBooks[bo].shelf;
  //           }
  //         }
  //       }
  //       setResultBooks(response);
  //     } else {
  //       setResultBooks([]);
  //     }
  //   });
  // }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={debouncedResults}
          />
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
                      <option disabled>Move to...</option>
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
