import React, { Component } from "react";

type StateTypes = {
  nameCompany: string;
};

export default class PTIT_CNTT1_IT104_Session13_Bai09 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      nameCompany: "Demo",
    };
  }

  render() {
    const handleChange = () => {
      this.setState({ nameCompany: "Test" });
    };

    return (
      <div>
        <h1>Tên công ty: {this.state.nameCompany}</h1>
        <button onClick={handleChange}>Change</button>
      </div>
    );
  }
}
