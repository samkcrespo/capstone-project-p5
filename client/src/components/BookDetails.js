import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function BookDetails({ book }) {
  const gridStyles = {
    paddingBottom: 5,
    paddingRight: 2,
    marginTop: 2,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 500,
  };
  return (
    <Grid
      container
      style={gridStyles}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={1}
      className="book-details"
    >
      {/* <img src={book.image_url} alt="book" width="300px" />
      <h4>{book.title}</h4>
      <h4>{book.author}</h4>
      <h4>{book.description}</h4>
      <h4>{book.genres}</h4>
      <h4>{book.pages}</h4> */}
      <Grid item xs={6} md={10}>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="500"
            image={book.image_url}
            alt="book cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${book.title} : ${book.author}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.genres}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.pages}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to BookClub Reading List</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default BookDetails;
