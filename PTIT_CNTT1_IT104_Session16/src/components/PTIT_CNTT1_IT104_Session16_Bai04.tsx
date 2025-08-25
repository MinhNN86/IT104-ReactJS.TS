import React, { Component } from "react";
type StateTypes = {
  count: number;
};
export default class PTIT_CNTT1_IT104_Session16_Bai04 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }
}
