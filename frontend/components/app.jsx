import React from "react";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import GreetingContainer from "./greetings/greetings_container";
import LoginContainer from "./session/login_container";
import SignupContainer from "./session/signup_container";
import ListingsContainer from "./listings/listing_container";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import { Link } from "react-router-dom";
import ShopSidebarContainer from "./shops/shop_sidebar_container";

export default () => (
  <div>
    <Modal />
    <Switch>
      {/* <header>
      <Link to="/" className="header-link" />
      <GreetingContainer />
    </header> */}
      {/* <Route path="/" component={NavBarContainer} />*/}
      <Route exact path="/" component={GreetingContainer} />
      <Route path="/listings/create" component={ListingsContainer} />
      {/* <Route path="/listings/create" component={ShopSidebarContainer} /> */}
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
    </Switch>
  </div>
);
