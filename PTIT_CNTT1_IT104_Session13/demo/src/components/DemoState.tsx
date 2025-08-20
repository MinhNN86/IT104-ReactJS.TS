import React, { Component } from "react";

type PropTypes = {};

type StateTypes = {
  companyName?: string;
  age?: number;
};

export default class DemoState extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    // Khai báo các State
    this.state = {
      companyName: "Demo",
      age: 3,
    };
  }
  render() {
    const handleChangeName = (): void => {
      // cập nhật giá trị của State
      this.setState({
        companyName: "Test",
      });
    };

    const handleRandomAge = (): void => {
      this.setState({
        age: Math.ceil(Math.random() * 1000),
      });
    };

    return (
      <div>
        <h2>Company Name: {this.state.companyName}</h2>
        <h2>Age: {this.state.age}</h2>
        <button onClick={handleChangeName}>Change Company Name</button>
        <button onClick={handleRandomAge}>Random age</button>
      </div>
    );
  }
}
