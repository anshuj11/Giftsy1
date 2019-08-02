import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route } from "react-router-dom";
import Modal from "./modal/modal";
import GreetingContainer from "./greetings/greetings_container";
import LoginContainer from "./session/login_container";
import SignupContainer from "./session/signup_container";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link" />
      <GreetingContainer />
    </header>
    {/* <Route path="/" component={NavBarContainer} />*/}
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);
