import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../bookworm.jpg";
// import { Tabs } from "@mui/material";

import Home from "./Home";

export default function Header({
  user,
  setUser,
  handleLogout,
  handleListSearch,
  recommendationLists,
}) {
  // const linkStyles = {
  //   display: "inline-block",
  //   width: "100px",
  //   padding: "12px",
  //   borderRadius: "5px",
  //   // margin: "6px 6px 6px",
  //   // background: "#F1A984",
  //   // #f1965c
  //   textDecoration: "none",
  //   color: "#D3C1D2",
  //   fontSize: "18px",
  // };

  return (
    <div className="header">
      <div className="navcontainer">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <div>
          {/* <img className="navlogo" src={logo} alt="logo" /> */}
          {/* <img className="navlogo" src={image} alt="logo" /> */}
          {/* <h1>BookWorm Reading Club</h1> */}
          {/* <Tabs> */}
          {/* <img className="navlogo" src={logo} alt="logo" /> */}
          <nav
            // className="navbar"
            className="topnav"
            style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}
          >
            <NavLink to="/book_clubs">BookClubs</NavLink>
            <NavLink to="/books">Books</NavLink>
            <img className="navlogo" src={logo} alt="logo" />
            {user ? (
              <>
                <NavLink to="/logout" onClick={handleLogout}>
                  Logout
                </NavLink>
                <NavLink to="/profile/user_book_clubs">My Profile</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signup">Sign-Up</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/">
              <img className="navlogo" src={logo} alt="logo" />
            </NavLink> */}
          </nav>
        </div>
      </div>
    </div>
  );
}
