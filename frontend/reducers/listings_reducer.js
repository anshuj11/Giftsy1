import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_LISTING
} from "../actions/listing_actions";
import merge from "lodash/merge";

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      newState = merge({}, action.listings);
      return newState;
    case RECEIVE_LISTING:
      return merge({}, state, { [action.listing.id]: action.listing });
    default:
      return state;
  }
};

export default listingsReducer;
