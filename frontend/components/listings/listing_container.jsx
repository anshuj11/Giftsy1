import { connect } from "react-redux";
import { makeListing } from "../../actions/listing_actions";
import ListingForm from "./listing_form";


const msp = (state, ownProps) => {
  const listing = { title: "", description: "", price: 0, shipping: 0.0 };
  return {
    listing: listing,
    formType: "createListing"
  };
};

const mdp = dispatch => ({
  makeListing: listing => dispatch(makeListing(listing))
});

export default connect(
  msp,
  mdp
)(ListingForm);
