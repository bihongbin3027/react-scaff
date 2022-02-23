import React from "react";

class Home extends React.Component {
  static state = {
    count: 0,
  };

  static show() {
    this.state.count = this.state.count + 1;
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: 100,
            height: 100,
            background: "url(static/svg/square-big.svg)",
          }}
        ></div>
        <img src="static/svg/square-big.svg" width="100" height="100" />
      </div>
    );
  }
}

export default Home;
