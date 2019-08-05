import React from "react";
import { withRouter } from "react-router-dom";
import ShopSidebarContainer from "../shops/shop_sidebar_container";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.listing;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .makeListing(this.state)
      .then(() => this.props.history.push("/listings/create"));
  }

  render() {
    return (
      <div className="listingPage">
        <ShopSidebarContainer className="ShopSidebar" />

        <form onSubmit={this.handleSubmit}>
          <h2>Add a new listing</h2>
          <h3>Listing Details</h3>
          <label>
            Title *
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
            />
          </label>
          <br />
          <br />

          <label>
            Description
            <textarea
              value={this.state.description}
              onChange={this.update("description")}
            />
          </label>
          <br />
          <br />
          <label>
            Price
            <input
              type="number"
              value={this.state.price}
              onChange={this.update("price")}
            />
          </label>
          <br />
          <br />
          <label>
            Shipping
            <input
              type="number"
              value={this.state.shipping}
              onChange={this.update("shipping")}
            />
          </label>
          <br />
          <br />
          <input type="submit" value={this.props.formType} />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default withRouter(ListingForm);
