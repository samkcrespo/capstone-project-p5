import React from "react";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
// import { useHistory } from "react-router-dom";

function BookClubCard({ bookclub }) {
  const { name, image_url } = bookclub;
  // const history = useHistory();

  // const handleClick = () => {
  //   dispatch(currentBookclub(props.bookclub));
  //   history.push(`/bookclubs/${id}`);
  // };
  const gridStyles = {
    paddingBottom: 5,
    paddingRight: 2,
    marginTop: 2,
    maxWidth: 800,
  };
  console.log(bookclub.book_club_books);
  return (
    <Box flexDirection="row" style={gridStyles} justifyContent="center">
      <Box order={2}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={`${name} bookclub`}
              image={image_url}
              title={name}
              height="140"
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
              ></Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`${bookclub.book_club_users.length} Member(s)`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Currently Reading: ${bookclub.book_club_books.title}`}
              </Typography>
              <Button>
                View
                <MenuBookIcon sx={{ fontSize: "1em" }} color="primary" />
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}

export default BookClubCard;
