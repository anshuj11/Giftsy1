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
    // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  //   onSetSidebarOpen(open) {
  //     this.setState({ sidebarOpen: open });
  //   }

  render() {
    return (
      <Sidebar
        sidebar={<b>Shop Manager</b>}
        open={this.state.sidebarOpen}
        styles={{ sidebar: { background: "white" } }}
        children="Child1"
        docked={this.state.docked}
      />
    );
  }
}

export default ShopSidebarContainer;
