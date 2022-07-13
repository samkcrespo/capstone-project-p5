import * as React from "react";
import SearchBar from "./SearchBar";
import BookDetails from "./BookDetails";
import { Grid, Paper, Typography } from "@mui/material";

const BookResults = ({ handleBookSearch, handleFetchBook, books, loading }) => {
  return (
    <Paper elevation={0} sx={{ p: 4 }}>
      <Grid container flexDirection="column">
        <Typography component="h1" variant="h3" align="center">
          What Will You Read Next?
        </Typography>

        <Grid
          container
          item
          flexDirection="column"
          className="search-container"
          alignItems="center"
        >
          <SearchBar handleBookSearch={handleBookSearch} />

          <Grid
            container
            item
            spacing={5}
            sx={{ pt: 6 }}
            alignItems="center"
            justifyContent="center"
          >
            {loading ? (
              <h4>Loading...</h4>
            ) : (
              books &&
              books.map((book) => (
                <BookDetails
                  key={book.id}
                  book={book}
                  handleFetchBook={handleFetchBook}
                />
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BookResults;
