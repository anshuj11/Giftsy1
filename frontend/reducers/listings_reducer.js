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
      console.log("NewState:", newState);
      return newState;
    case RECEIVE_LISTING:
      return Object.assign({}, state, { [action.listing.id]: action.listing });
    default:
      return state;
  }
};

export default listingsReducer;
