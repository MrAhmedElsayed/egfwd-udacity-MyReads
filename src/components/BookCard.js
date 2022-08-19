import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccountMenu from "./DropdownComp";


export default function BookCard({book}) {


  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }} variant="outlined">
      <CardMedia
        component="img"
        image={book.imageLinks.thumbnail}
        alt="book cover"
      />
      <CardContent sx={{ flexGrow: 1, position: "relative" }}>
        <Typography gutterBottom variant="h6" component="h3">
          {book.title}
        </Typography>
        <Typography>{book.authors.map((auth) => `${auth}`)}</Typography>
        <AccountMenu />
      </CardContent>
    </Card>
  );
}
