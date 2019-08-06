import {
  createListing,
  fetchListing,
  fetchListings
} from "../util/listing_api_util";
export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

export const receiveListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const requestListings = () => dispatch => {
  return fetchListings().then(listings => dispatch(receiveListings(listings)));
};

export const requestListing = id => dispatch => {
  return fetchListing(id).then(listing => dispatch(receiveListing(listing)));
};
export const makeListing = listing => dispatch => {
  return createListing(listing).then(listing =>
    dispatch(receiveListing(listing))
  );
};
