import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../images/spinner";

class ListingShow extends React.Component {
  componentDidMount() {
    this.props.requestListing(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.listing &&
      prevProps.listing.id != this.props.match.params.id
    ) {
      this.props.requestListing(this.props.match.params.id);
    }
  }

  render() {
    const { listing } = this.props;
    if (!listing) {
      return <Spinner />;
    }

    return (
      <div>
        <h3>{listing.title}</h3>
        <img src={listing.photoUrl} className="ListingPic" />
        <p>{listing.description}</p>
        <p> Price: ${listing.price}</p>
        <p> Shipping: ${listing.shipping}</p>

        <Link to="/listings">Back to Index</Link>
      </div>
    );
  }
}

export default ListingShow;
