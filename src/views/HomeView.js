import * as React from "react";
import Fab from "@mui/material/Fab";
import FindInPageSharpIcon from "@mui/icons-material/FindInPageSharp";
import CurrentlyReadingComp from "../components/CurrentlyReadingComp";
import WanttoReadComp from "../components/WanttoReadComp";
import ReadComp from "../components/ReadComp";
import { Divider } from "@mui/material";

export default function HomeView() {
  return (
    <React.Fragment>
      <CurrentlyReadingComp />
      <Divider variant="middle" sx={{ my: 4 }} />
      <WanttoReadComp />
      <Divider variant="middle" sx={{ my: 4 }} />
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
