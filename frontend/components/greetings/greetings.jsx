import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <div>
      <nav className="login-signup">
        <h2> Giftsy</h2>
        <div className="buttons-rt">
          <button onClick={() => openModal("login")}>Sign In</button>
          &nbsp; &nbsp;
          <button onClick={() => openModal("signup")}>Register</button>
          &nbsp; &nbsp;
          <Link to="/listings">Discover</Link>
          &nbsp; &nbsp;
        </div>
      </nav>
      <ul className="NavList">
        <li>Accesories</li>
        <li>Clothing</li>
        <li>Home</li>
        <li>Wedding</li>
        <li>Toys </li>
        <li>Art</li>
        <li>Craft Supplies</li>
        <li>Vintage</li>
      </ul>
    </div>
  );
  const personalGreeting = () => (
    // <hgroup className="header-group">
    <nav className="login-signup">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <div className="buttons-rt">
        <button className="header-button" onClick={logout}>
          Log Out
        </button>
        &nbsp; &nbsp;
        <Link to="/listings/create">List your item</Link>
        &nbsp; &nbsp;
      </div>
    </nav>
    // </hgroup>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};

export default Greeting;
