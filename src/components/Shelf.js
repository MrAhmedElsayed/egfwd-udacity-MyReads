// import React from "react";
// import { useState } from "react";
import BookCard from "./BookCard";

const Shelf = ({ shelfTitle, bookList }) => {
  // const {books, setBookList} = useState([])
  // * shelfTitle: the title of shelf appear in upper center shelf
  // * bookList: the books list comes from api and filtered by shelf
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            {shelfTitle}
          </p>
        </div>

        <div className="mx-auto my-5 border-4 border-dashed border-gray-200 rounded-lg h-auto p-2">
          <div className="container my-6 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              {bookList.map((book) => (
                <BookCard key={book.id} bookObject={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
