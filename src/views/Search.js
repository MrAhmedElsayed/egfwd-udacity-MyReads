import React, { useState } from "react";
import Shelf from "../components/Shelf";
import FabFixedBtn from "../components/FabFixedBtn";
import { search } from "../services/BooksAPI";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchMeassage, setSearchMeassage] = useState("Please provide a search input ....")

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    // console.log("input value is:", event.target.value);
    search(searchInput).then((res) => {
      console.log(searchInput)
      if (res.length > 0) {
        setSearchResult(res)  
      } else {
        setSearchMeassage(`No search result for "${searchInput}"`)
      }
    });
  };

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   search(searchInput).then((res) => {
  //     if (res.length > 0) {
  //       setSearchResult(res)  
  //     } else {
  //       setSearchMeassage(`No search result for "${searchInput}"`)
  //     }
  //   });
  //   // console.log("submit");
  // };

  return (
    <React.Fragment>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Books by Title, ISBN ..."
                required
                name="search-input"
                onChange={handleInputChange}
                value={searchInput}
              />
              <button
                type="button"
                onClick={handleInputChange}
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          
        </div>
      </div>

      {searchResult.length > 0 ? (
        <Shelf
          shelfTitle={`results of ${searchInput}`}
          bookList={searchResult}
        />
      ) : (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-center border-4 border-dashed border-gray-200 rounded-lg h-48 bg-slate-50">
              <h2 className="text-2xl text-gray-400 my-auto">
                {searchMeassage}
              </h2>
            </div>
          </div>
        </div>
      )}

      <FabFixedBtn
        btnHref={"/"}
        btnColor={"text-indigo-700 bg-indigo-100 hover:bg-indigo-200"}
      />
    </React.Fragment>
  );
};

export default SearchPage;
