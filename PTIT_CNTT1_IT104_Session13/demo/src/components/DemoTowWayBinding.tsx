import React, { Component } from "react";

type PropTypes = {
  id?: string;
};

type StateTypes = {
  email?: string;
};

export default class DemoTowWayBinding extends Component<
  PropTypes,
  StateTypes
> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      email: "",
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        email: event.target.value,
      });
    };

    const handleChangeData = () => {
      this.setState({
        email: "demo@gmail.com",
      });
    };

    return (
      <div>
        <h1>{this.state.email}</h1>
        <input value={this.state.email} type="text" onChange={handleChange} />
        <button onClick={handleChangeData}>Change Data</button>
      </div>
    );
  }
}
