import "../App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import theme from "../theme";
import { CircularProgress } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Search from "./Search";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import BookClubs from "./BookClubs/BookClubs";
import Books from "./Books/Books";
import Profile from "./Profile";
import BookDetails from "./BookDetails";
import BookClub from "./BookClubs/BookClub";
import ProfileBookClubs from "./BookClubs/ProfileBookClubs";
import Footer from "./Footer";

const apiKey = process.env.REACT_APP_RAPID_API_KEY;

export default function App() {
  const appliedTheme = createTheme(theme);
  const [user, setUser] = useState(null);
  const [sessionCheck, setSessionCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookResults, setBookResults] = useState(null);
  const [currentbook, setCurrentBook] = useState(null);
  const [recommendationLists, setRecommendationLists] = useState(null);
  const [currentList, setCurrentList] = useState(null);
  const [currentBookclub, setCurrentBookclub] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // auto-login
    handleCheckUser();
  }, []);

  function handleCheckUser() {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      } else {
        response.json().then((err) => console.log(err));
      }
    });
    setSessionCheck(true);
  }

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
      navigate("/");
    });
  }

  // START Book & bookclub related functions

  // const handleFetchRecommendations = () => {
  //   fetch("https://goodreads-books.p.rapidapi.com/lists?page=1", {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
  //       "x-rapidapi-key": apiKey,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecommendationLists(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  function handleListSearch(listId) {
    setLoading(true);

    fetch(`https://goodreads-books.p.rapidapi.com/lists/${listId}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentList({
          id: listId,
          list: data,
        });
        setLoading(false);
        setBookResults(null);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleBookSearch(searchText) {
    setLoading(true);
    fetch(
      `https://goodreads-books.p.rapidapi.com/search?q=${searchText}&page=1`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
          "x-rapidapi-key": apiKey,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBookResults(data);
        setLoading(false);
        setCurrentList(null);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleFetchBook(bookId) {
    setCurrentBook(null);
    setLoading(true);
    fetch(`https://goodreads-books.p.rapidapi.com/books/${bookId}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
        "x-rapidapi-key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // function handleFetchBookClub(bookClubId){
  //   setCurrentBookclub(null);
  //   setLoading(true);
  //   fetch(`/api/bookclubs/${bookClubId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setCurrentBookclub(data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  // END Book & bookclub related functions

  if (sessionCheck) {
    return (
      <div className="navcontainer">
        <ThemeProvider theme={appliedTheme} />
        <Box className="flex column">
          <Header
            user={user}
            setUser={setUser}
            handleLogout={handleLogout}
            handleListSearch={handleListSearch}
            recommendationLists={recommendationLists}
          />

          <Routes>
            <Route
              index
              path="/"
              element={
                <Home
                  user={user}
                  handleListSearch={handleListSearch}
                  recommendationLists={recommendationLists}
                />
              }
            />
            <Route
              path="signup"
              element={
                <Signup onLogin={setUser} onLogout={handleLogout} user={user} />
              }
            />
            <Route
              path="login"
              element={
                <Login onLogin={setUser} onLogout={handleLogout} user={user} />
              }
            />
            <Route
              path="profile"
              element={<Profile user={user} setUser={setUser} />}
            >
              <Route
                path="user_book_clubs"
                element={
                  <ProfileBookClubs
                    user={user}
                    setUser={setUser}
                    fetchUser={handleCheckUser}
                  />
                }
              />
            </Route>
            <Route
              path="search"
              element={
                <Search
                  recommendationLists={recommendationLists}
                  currentList={currentList}
                  handleListSearch={handleListSearch}
                  bookResults={bookResults}
                  handleBookSearch={handleBookSearch}
                  handleFetchBook={handleFetchBook}
                  loading={loading}
                />
              }
            ></Route>
            <Route path="books" element={<Books />}>
              <Route
                path=":id"
                element={
                  <BookDetails
                    book={currentbook}
                    handleFetchBook={handleFetchBook}
                    loading={loading}
                    user={user}
                  />
                }
              />
            </Route>
            <Route path="book_clubs" element={<BookClubs />}>
              <Route
                path=":id"
                element={
                  <BookClub
                    user={user}
                    loading={loading}
                    bookclub={currentBookclub}
                    // handleFetchBookClub={handleFetchBookClub}
                  />
                }
              ></Route>
            </Route>
            {/* <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
              <Header
                user={user}
                setUser={setUser}
                handleLogout={handleLogout}
                handleListSearch={handleListSearch}
                recommendationLists={recommendationLists}
              />

              {/* <Button variant="contained">Hello World</Button> */}
            {/* <Outlet context={[user, setUser]} />  */}
          </Routes>
          <Footer />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Box>
        <ThemeProvider />
        <Outlet />
      </div>
    );
  } else {
    return (
      <div>
        <ThemeProvider theme={appliedTheme} />

        <Header user={user} setUser={setUser} handleLogout={handleLogout} />
        <CircularProgress color="secondary" />
        <p>Loading...</p>

        <ThemeProvider />
      </div>
    );
  }
}
