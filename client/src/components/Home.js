import React from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
import homeImage from "../homeimage.jpg";
import theme from "../theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

function Home({ user }) {
  const appliedTheme = createTheme(theme);
  let navigate = useNavigate();

  return (
    <div className="homecontainer">
      <ThemeProvider theme={appliedTheme}>
        <Paper>
          {/* <Grid item xs={12} alignItems="center"> */}
          <div id="section-3" class="panel">
            <div id="section3-text">
          <img
            src={homeImage}
            alt="reading"
            className="homepageimage"
            id="section3-img"
          />
          <div className="homepagetypog">
            <Typography type="h4" variant="h4" align="center">
              BookWorm Reading Club is a virtual space to connect and socialize
              with fellow book lovers.
            </Typography>
            <Typography type="h5" variant="h5" align="center">
              Create your own bookclub, join an existing club, find your book
              people.
            </Typography>
            {user ? (
              <div className="homepagebutton">
                <Button
                  // className="homepagebutton"
                  onClick={() =>
                    navigate(!user ? `/signup` : `/profile/user_book_clubs`)
                  }
                  variant="contained"
                  // className="b-radius btn btn-lg"
                  color="secondary"
                >
                  Go to My BookClubs
                </Button>
              </div>
            ) : (
              <div className="homepagebutton">
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  size="small"
                  align="center"
                >
                  <Button
                    className="homepagebutton"
                    onClick={() => navigate(`/signup`)}
                    variant="contained"
                    // className="b-radius btn btn-lg"
                    color="secondary"
                  >
                    Join Today!{" "}
                  </Button>
                  <Button
                    className="homepagebutton"
                    onClick={() => navigate(`/login`)}
                    variant="contained"
                    // className="b-radius btn btn-lg"
                    color="primary"
                  >
                    Already registered? Login!
                  </Button>
                </ButtonGroup>
              </div>
            )}
          </div>
          </div>
          </div>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default Home;
