import * as React from "react";
import { Grid, Typography, Button } from "@mui/material";

import CreateBookClubModal from "../CreateBookClubModal";
import BookClubCard from "./BookClubCard";

const ProfileBookClubs = ({ user, fetchUser }) => {
  const [bookclubs, setBookClubs] = React.useState(user ? user.book_clubs : []);

  //handle modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModel = () => setOpenModal(true);
  const handleCloseModel = () => setOpenModal(false);

  // React.useEffect(() => {
  //   setBookClubs(user.book_clubs ? user.book_clubs : []);
  // }, [user]);

  return (
    <>
      <Grid item>
        <Typography component="h1" variant="h4" align="center" paddingTop>
          My Book Clubs
        </Typography>
      </Grid>
      <Grid
        item
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
      >
        {/* {bookclubs.length === 0 ? (
          <Grid item textAlign="center">
            <Typography
              component="p"
              variant="subtitle1"
              align="center"
              paddingTop
            >
              You don't have any book clubs right now
            </Typography>
          </Grid>
        ) : ( */}
        {/* <Grid
          item
          container
          spacing={3}
          alignItems="stretch"
          justifyContent="flex-start"
        >
          {bookclubs.map((bookclub) => (
            <BookClubCard
              bookclub={bookclub}
              key={`bookclub-${bookclub.id}`}
              user={user}
            />
          ))}
        </Grid> */}
      </Grid>
      <Grid item textAlign="center">
        <Button
          onClick={handleOpenModel}
          variant="contained"
          className="b-radius btn btn-lg"
          color="secondary"
        >
          Start A New Book Club
        </Button>
      </Grid>

      <CreateBookClubModal
        openModal={openModal}
        handleCloseModel={handleCloseModel}
        setBookClubs={setBookClubs}
        fetchUser={fetchUser}
      />
    </>
  );
};

export default ProfileBookClubs;
