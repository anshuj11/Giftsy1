import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store/store";
import Root from "./components/root";
import { fetchListings, receiveListings } from "./util/listing_api_util";
import { requestListings } from "./actions/listing_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  window.fetchListings = fetchListings;
  window.requestListings = requestListings;
  const store = createStore(preloadedState);
  const getSuccess = listings => console.log(receiveListings(listings));
  const posts = fetchListings();
  console.log("Posts: ", posts);
  ReactDOM.render(<Root store={store} />, root);
});
