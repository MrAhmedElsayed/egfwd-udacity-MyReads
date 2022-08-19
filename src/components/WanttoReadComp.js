import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BookCard from "./BookCard";
import Divider from "@mui/material/Divider";


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

export default function WanttoReadComp() {
  return (
    <React.Fragment>
      <Divider variant="middle" sx={{ my: 4 }}>
        <Typography gutterBottom variant="h4" component="h1">
          Want to Read
        </Typography>
      </Divider>
      <Grid container spacing={4}>
        {BooksList.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
