import "../App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function App() {
  const [user, setUser] = useState(null);
  const [sessionCheck, setSessionCheck] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
        });
      }
      setSessionCheck(true);
    });
  }, []);

  if (sessionCheck) {
    return (
      <div className="navcontainer">
        <Header user={user} setUser={setUser} />
        <Outlet context={[user, setUser]} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <p>Loading...</p>
      </div>
    );
  }
}
