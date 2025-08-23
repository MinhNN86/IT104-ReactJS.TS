import React, { Component, createRef } from "react";

export default class PTIT_CNTT1_IT104_Session15_Bai01 extends Component {
  private emailRef = createRef<HTMLInputElement>();
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (this.emailRef.current) {
        console.log(this.emailRef.current.value);
      }
    };
    return (
      <div>
        <h1>From</h1>
        <form onSubmit={handleSubmit}>
          <div>Email</div>
          <input type="text" ref={this.emailRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
