import {
  RECEIVE_ALL_LISTINGS,
  RECEIVE_LISTING
} from "../actions/listing_actions";
import { merge } from "lodash";

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return Object.assign({}, action.listings);
    case RECEIVE_LISTING:
      return merge({}, state, { [action.listing.id]: action.listing });
    default:
      return state;
  }
};

export default listingsReducer;
