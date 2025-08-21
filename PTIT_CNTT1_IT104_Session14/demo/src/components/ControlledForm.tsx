import React, { Component } from "react";

type StateTypes = {
  user: {
    userName?: string;
    email?: string;
    address?: string;
  };
};

// type User = StateTypes;

export default class ControlledForm extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      user: {
        userName: "",
        email: "",
        address: "",
      },
    };
  }
  render() {
    console.log("re-render");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // Lấy ra value kèm theo name của input
      const { name, value } = event.target;

      this.setState({
        user: {
          ...this.state.user,
          [name]: value,
        },
      });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      // ngăn chặn hành vi load lại trang
      event.preventDefault();

      console.log(this.state.user);
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="userName"
            // value={this.state.userName}
            type="text"
            placeholder="Enter Username"
          />
          <br />
          <input
            onChange={handleChange}
            name="email"
            // value={this.state.email}
            type="text"
            placeholder="Enter Email"
          />
          <br />
          <input
            onChange={handleChange}
            name="address"
            // value={this.state.address}
            type="text"
            placeholder="Enter Address"
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
