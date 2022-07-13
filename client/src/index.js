import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route path="login" element={<Login />} />
  //       <Route path="signup" element={<Signup />} />
  //       <Route path="book_clubs" element={<BookClubs />} />
  //       <Route path="books" element={<Books />} />
  //       <Route
  //         path="*"
  //         element={
  //           <main style={{ padding: "1rem" }}>
  //             <p>No Route Match path</p>
  //           </main>
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>,
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
