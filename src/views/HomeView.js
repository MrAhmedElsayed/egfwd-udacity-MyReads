import * as React from "react";
import Fab from "@mui/material/Fab";
import FindInPageSharpIcon from "@mui/icons-material/FindInPageSharp";
import CurrentlyReadingComp from "../components/CurrentlyReadingComp";
import WanttoReadComp from "../components/WanttoReadComp";
import ReadComp from "../components/ReadComp";
import BookShelf from "../components/BookShelf";


const BooksList = [
  {
    id: "nggnmAEACAAJ",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    title: "The Linux Command Line",
    authors: ["William E. Shotts, Jr."],
    shelf: "currentlyReading",
  },
  {
    id: "sJf1vQAACAAJ",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    title: "Learning Web Development with React and Bootstrap",
    authors: ["Harmeet Singh", "Mehul Bhatt"],
    shelf: "currentlyReading",
  },
  {
    id: "evuwdDLfAyYC",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    title: "The Cuckoo's Calling",
    authors: ["Robert Galbraith"],
    shelf: "wantToRead",
  },
  {
    id: "IOejDAAAQBAJ",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=IOejDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    title: "React",
    authors: ["Nils Hartmann", "Oliver Zeigermann"],
    shelf: "read",
  },
];


export default function HomeView() {

  // get data for every shelf as a new array
  // - first intialize data from api for every shelf !!
  const CurrentlyReadingShelf = [];
  const WanttoReadShelf = [];
  const ReadShelf = [];


  return (
    <React.Fragment>

      <BookShelf shelfName={"Ahmed Sayed"} booksArray={BooksList} />

      <CurrentlyReadingComp />
      <WanttoReadComp />
      <ReadComp />

      <Fab
        href="/search"
        size="medium"
        color="success"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <FindInPageSharpIcon />
      </Fab>
    </React.Fragment>
  );
}
