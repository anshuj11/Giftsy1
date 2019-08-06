import React from "react";
import ListIndexItem from "./list_index_item";
//import CreatePostFormContainer from './create_post_form_container';

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.getListings().then(listings => console.log(listings));
  }

  render() {
    const posts = this.props.listings.map(listing => {
      return (
        <ul>
          <ListIndexItem key={listing.id} listing={listing} />
        </ul>
      );
    });

    return (
      <div>
        <ul>{posts}</ul>
        {/* <CreatePostFormContainer /> */}
      </div>
    );
  }
}

export default ListingIndex;
