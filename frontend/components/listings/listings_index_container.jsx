import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import { requestListings } from "../../actions/listing_actions";

const msp = state => {
  
  return {
    listings: Object.values(state.entities.listings)
  };
};

const mdp = dispatch => ({
  getListings: () => dispatch(requestListings())
  // deletePost: id => dispatch(deletePost(id))
});

export default connect(
  msp,
  mdp
)(ListingIndex);
