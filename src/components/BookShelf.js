import * as React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import BookCard from "./BookCard";
import Typography from "@mui/material/Typography";


const BookShelf = ({shelfName, booksArray}) => {
  return (
    <React.Fragment>
      <Divider variant="middle" sx={{ my: 4 }}>
        <Typography gutterBottom variant="h4" component="h1">
          {shelfName}
        </Typography>
      </Divider>
      <Grid container spacing={4}>
        {booksArray.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default BookShelf;
