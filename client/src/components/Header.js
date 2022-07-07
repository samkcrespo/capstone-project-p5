import React from "react";
import { NavLink, useOutlet, useOutletContext } from "react-router-dom";
import image from "../alternativebookwormlogo.jpg";
// import logo from "../BookWormLogosml.jpg";

export default function Header() {
  // const { user, setUser } = useOutletContext();
  const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    borderRadius: "5px",
    // margin: "6px 6px 6px",
    // background: "#F1A984",
    // #f1965c
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
  };

  // function handleLogout() {
  //   fetch("/logout", { method: "DELETE" }).then((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //     }
  //   });
  // }

  return (
    <div>
      <div className="navcontainer">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Kumbh+Sans:wght@500;600&family=Source+Code+Pro:wght@300&display=swap"
          rel="stylesheet"
        />
        <div>
          {/* <img className="navlogo" src={image} alt="logo" /> */}
          {/* <h1>BookWorm Reading Club</h1> */}
          <nav
            className="navbar"
            style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}
          >
            <img className="navlogo" src={image} alt="logo" />
            {/* {user ? (
              <button
                style={linkStyles}
                className="nav-item"
                activeStyle={{
                  background: "lightblue",
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  className="nav-item"
                  style={linkStyles}
                  activeStyle={{
                    background: "lightblue",
                  }}
                >
                  Sign-Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="nav-item"
                  style={linkStyles}
                  activeStyle={{
                    background: "lightblue",
                  }}
                >
                  Login
                </NavLink>
              </>
            )} */}
            <NavLink
              className="navlink"
              style={linkStyles}
              activeStyle={{
                background: "#EABCA2",
              }}
              to="/login"
            >
              Login
            </NavLink>{" "}
            |{" "}
            <NavLink
              className="navlink"
              style={linkStyles}
              activeStyle={{
                background: "#EABCA2",
              }}
              to="/signup"
            >
              Sign Up
            </NavLink>{" "}
            |{" "}
            <NavLink
              className="navlink"
              style={linkStyles}
              activeStyle={{
                background: "#EABCA2",
              }}
              to="/book_clubs"
            >
              Books
            </NavLink>{" "}
            |{" "}
            <NavLink
              className="navlink"
              style={linkStyles}
              activeStyle={{
                background: "#EABCA2",
              }}
              to="/books"
            >
              BookClubs
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
