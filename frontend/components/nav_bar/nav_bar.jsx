import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className = "navbar" >
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">
        Sign Up
      </Link>
      <br />
      <Link className="btn" to="/login">
        Log In
      </Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">Giftsy</h1>
      <div>{display}</div>
    </header>
  );
};
