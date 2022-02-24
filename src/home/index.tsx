import React from "react";
import "./index.css";

class Home extends React.Component {
  static state = {
    count: 0,
  };

  static show() {
    this.state.count = this.state.count + 1;
  }

  render() {
    return (
      <div className="flex">
        <h1 className="txt-3xl font-bold underline w-50">react</h1>
        <img
          className="w-100"
          src="static/svg/square-big.svg"
          width="100"
          height="100"
        />
      </div>
    );
  }
}

export default Home;
