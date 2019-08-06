import { connect } from "react-redux";
import ListingShow from "./listing_show";
import { requestListing } from "../../actions/listing_actions";

const mapStateToProps = (state, ownProps) => ({ 
  //listing: state.entities.listings[ownProps.match.params.id]
  listing: state.entities.listings[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  requestListing: id => dispatch(requestListing(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
