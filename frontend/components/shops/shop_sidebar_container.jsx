import React from "react";
import Sidebar from "react-sidebar";


class ShopSidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      docked: true,
      children: null
    };
  }

  render() {
    return (
      <Sidebar
        // className="shopSidebar"
        sidebar={<b>Shop Manager</b>}
        open={this.state.sidebarOpen}
        styles={{
          sidebar: { background: "white", width: 300 }
        }}
        children=" "
        docked={this.state.docked}
      />
    );
  }
}

export default ShopSidebarContainer;
