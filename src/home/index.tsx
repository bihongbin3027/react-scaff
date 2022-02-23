import React from "react";

class Home extends React.Component {
  static state = {
    count: 0,
  };

  static show() {
    this.state.count = this.state.count + 1;
  }

  render() {
    return <div>home</div>;
  }
}

export default Home;
