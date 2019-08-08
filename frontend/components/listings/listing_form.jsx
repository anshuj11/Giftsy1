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
      <div className="ListingFormParent">
        {/* <ShopSidebarContainer className="shopSidebar" /> */}
        <div className="shopSidebar">Shop Manager</div>
        <div className="listingForm">
          <h2>Add a new listing</h2>
          <form>
            <h3 className="ListingComponentsLabel">Listing Details</h3>
            <p className="Subtext">
              Tell the world all about your item and why they’ll love it.
            </p>

            <label className="FormFieldLabels">Title * </label>
            <input
              className="FormField"
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
            />

            <br />
            <br />
            <label className="FormFieldLabels">Description </label>
            <textarea
              className="DescriptionBox"
              value={this.state.description}
              onChange={this.update("description")}
            />

            <br />
            <br />
            <label className="FormFieldLabels">Price </label>
            <input
              type="number"
              value={this.state.price}
              onChange={this.update("price")}
            />

            <br />
            <br />
            <label className="FormFieldLabels">Shipping </label>
            <input
              type="number"
              value={this.state.shipping}
              onChange={this.update("shipping")}
            />

            <br />
            <br />
            {/* <input type="submit" value={this.props.formType} /> */}
            <button onClick={this.handleSubmit}> Publish </button>
            <br />
            <br />
          </form>
        </div>
        <div className="shopSidebar" />
      </div>
    );
  }
}

export default withRouter(ListingForm);
