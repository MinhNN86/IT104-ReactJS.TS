import React, { Component, createRef } from "react";

export default class UNControlledForm extends Component {
  private userNameRef = createRef<HTMLInputElement>();
  private emailRef = createRef<HTMLInputElement>();
  private addressRef = createRef<HTMLInputElement>();
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Lấy ra các giá trị trong input
      const userNameValue = this.userNameRef.current?.value;
      const emailValue = this.emailRef.current?.value;
      const addressValue = this.addressRef.current?.value;

      const newUser = {
        userName: userNameValue,
        email: emailValue,
        address: addressValue,
      };

      console.log(newUser);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            ref={this.userNameRef}
            type="text"
            placeholder="Enter Username"
          />
          <br />
          <input ref={this.emailRef} type="text" placeholder="Enter Email" />
          <br />
          <input
            ref={this.addressRef}
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
