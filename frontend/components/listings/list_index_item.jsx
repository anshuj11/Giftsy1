import React from "react";
import { Link } from "react-router-dom";

const ListingIndexItem = ({ listing }) => {
  return (
    <li>
      <Link to={`/listings/${listing.id}`}>{listing.title}</Link>&nbsp;
    </li>
  );
};

export default ListingIndexItem;
