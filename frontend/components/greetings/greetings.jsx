import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <h2> Giftsy</h2>
      <div className="buttons-rt">
        <button onClick={() => openModal("login")}>Sign In</button>
        &nbsp; &nbsp;
        <button onClick={() => openModal("signup")}>Register</button>
        &nbsp; &nbsp;
        <Link to="/listings">Discover</Link>
        &nbsp; &nbsp;
        <Link to="/listings/create">List your item</Link>
        &nbsp; &nbsp;
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
