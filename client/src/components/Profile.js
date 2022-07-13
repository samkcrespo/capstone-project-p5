import React from "react";

import { Outlet } from "react-router";
import {
  Grid,
  Typography,
  Button,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ModeSharpIcon from "@mui/icons-material/ModeSharp";

function Profile({ user, setUser }) {
  let navigate = useNavigate();
  //handle modal
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModel = () => setOpenModal(true);
  const handleCloseModel = () => setOpenModal(false);

  const handleDeleteProfile = () => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setUser(null);
        navigate("/");
      }
    });
  };
  return (
    <Grid container className="profile-container" justifyContent="stretch">
      <Card>
        <Grid item>
          <CardContent>
            {user ? (
              <Typography component="h4" variant="h4" align="center" paddingTop>
                <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                {`Welcome, ${user.username}!`}
              </Typography>
            ) : (
              <Typography>Log In To View Profile</Typography>
            )}
          </CardContent>
          <CardMedia
            image={
              "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks="
            }
          />
          <Divider light />
          <Typography>Username: {user.username}</Typography>
          <Typography>First Name: {user.first_name}</Typography>
          <Typography>Last Name: {user.last_name}</Typography>
          <Typography>Email: {user.email}</Typography>
        </Grid>
        <Grid item></Grid>
        <Grid item textAlign="right" sx={{ pt: 10 }}>
          <Button
            variant="text"
            className="b-radius btn btn-lg"
            color="warning"
            onClick={handleOpenModel}
          >
            <ModeSharpIcon></ModeSharpIcon> Edit Profile
          </Button>
        </Grid>
        <Grid
          item
          container
          flexDirection="column"
          spacing={3}
          xs={12}
          md={8}
          lg={9}
          sx={{ p: 4 }}
        >
          {/* <Outlet /> */}
        </Grid>
      </Card>
    </Grid>
  );
}

export default Profile;
