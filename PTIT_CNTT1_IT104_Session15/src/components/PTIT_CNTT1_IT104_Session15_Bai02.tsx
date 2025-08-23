import React, { Component, createRef } from "react";

type State = {
  color: string;
};

export default class PTIT_CNTT1_IT104_Session14_Bai02 extends Component<
  object,
  State
> {
  private hexRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      color: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hexValue = this.hexRef.current?.value || "";
    this.setState({ color: hexValue });
  };

  render() {
    return (
      <div>
        <h1>Color: {this.state.color}</h1>
        <form onSubmit={this.handleSubmit}>
          <h1>Form</h1>
          <div>Màu sắc</div>
          <input type="color" ref={this.hexRef} />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
