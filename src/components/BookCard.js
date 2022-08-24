import React, { Fragment, useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";
import { update } from "../services/BooksAPI";
// import Toast from "./Toast";

const bookStatus = [
  { title: "Want To Read", value: "wantToRead" },
  { title: "Currently Read", value: "currentlyReading" },
  { title: "Read", value: "read" },
  { title: "None", value: "none" },
];

const BookCard = ({ bookObject }) => {
  const [selected, setSelected] = useState(bookObject.shelf);
  const getShelf = (event) => {
    console.log(event)
    update(bookObject, event).then((res) => setSelected(event));
  };

  return (
    <React.Fragment>
      <div className="overflow-hidden my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="relative flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={bookObject.imageLinks.thumbnail}
            alt={bookObject.title}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {bookObject.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {bookObject.authors.map((author) => (
                <span key={author} className="text-gray-900">
                  {author},
                </span>
              ))}
            </p>
          </div>
          {/* absolute pages count */}
          <span className="flex flex-row absolute bottom-0 right-0 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="p-1">{bookObject.pageCount}</span>
          </span>

          {/* dropdown menu */}
          <Listbox
            value={selected}
            onChange={getShelf}
            className="absolute top-0 right-0 w-40"
          >
            <div className="relative mt-1">
              <Listbox.Button className="inline-flex w-full justify-center rounded-md bg-indigo-600 bg-opacity-20 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {bookStatus.map((bookSt) => (
                    <Listbox.Option
                      key={bookSt.value}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={bookSt.value}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {bookSt.title}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          {/* dropdown menu */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookCard;
