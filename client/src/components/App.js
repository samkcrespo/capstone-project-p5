import "../App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="navcontainer">
      <Header />
      <Outlet context={[user, setUser]} />
    </div>
  );
}
