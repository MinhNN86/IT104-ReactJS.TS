import React, { Component } from "react";

type StateTypes = {
  email?: string;
};

export default class PTIT_CNTT1_IT104_Session14_Bai01 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      email: "",
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      this.setState({
        [name]: value,
      });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log(this.state);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Form</h1>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
