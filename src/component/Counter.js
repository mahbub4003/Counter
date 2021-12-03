import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  incrimentCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    const { count } = this.state;
    const { render } = this.props;
    return render(count, this.incrimentCount);
  }
}

export default Counter;
