import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1. get sotred user logged iformation from stroage;
  // 2. check if information === 1 to set loggedin to true;
  // ----------
  // using useEffect ->

  useEffect(() => {
    /// The effect will render when the component's rendering first!!!

    console.log("Effect-render");
    const userLoggedIngInfo = localStorage.getItem("isLoggedIn");
    if (userLoggedIngInfo === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);

    // 1. Store State in LocalStorage  -> true => 1 , else => 0;

    // 2. to check if user logged in or not!
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
