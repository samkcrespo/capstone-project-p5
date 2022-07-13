import React, { useEffect, useState } from "react";
import BookClubCard from "./BookClubCard";
// import * as React from "react";
import theme from "../../theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

function BookClubs() {
  const appliedTheme = createTheme(theme);
  const [bookclubs, setBookclubs] = useState([]);

  const gridStyles = {
    paddingBottom: 5,
    paddingRight: 2,
    marginTop: 2,
    maxWidth: 800,
  };

  useEffect(() => {
    fetch("/book_clubs")
      .then((res) => res.json())
      .then(setBookclubs);
  }, []);

  return (
    <div>
      <ThemeProvider theme={appliedTheme}>
        <Typography component="h4" variant="h4" align="center">
          All Book Clubs
        </Typography>
        <Box flexDirection="row" style={gridStyles} justifyContent="center">
          <Box flexDirection="row" style={gridStyles} justifyContent="center">
            {bookclubs.map((bookclub) => (
              <BookClubCard key={bookclub.id} bookclub={bookclub} />
            ))}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}
export default BookClubs;
