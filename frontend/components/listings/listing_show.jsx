import React from "react";
import { Link } from "react-router-dom";

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
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{listing.title}</h3>
        <p>{listing.description}</p>
        <Link to="/listings">Back to Index</Link>
      </div>
    );
  }
}

export default ListingShow;
