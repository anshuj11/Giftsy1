import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store/store";
import Root from "./components/root";
import { fetchListings, receiveListings } from "./util/listing_api_util";
import { requestListings } from "./actions/listing_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  const store = createStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});
