import React, { Component } from "react";

export default class DemoEvent extends Component {
  render() {
    const handleClick = (id: number) => {
      console.log("Button Clicked", id);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input Change", event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      // Ngăn chặn hành vi mặc định của form
      event.preventDefault();
      console.log("Form submited");
    };

    return (
      <div>
        <button onClick={() => handleClick(12)}>Click me</button>
        <input type="text" onChange={handleChange} />

        <form action="submit" onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
