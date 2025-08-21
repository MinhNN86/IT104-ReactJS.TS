import React, { Component } from "react";
import LifecycleComponent from "./components/LifecycleComponent";
import ControlledForm from "./components/ControlledForm";
import UNControlledForm from "./components/UNControlledForm";

type StateTypes = {
  isShow?: boolean;
  random?: number;
};

export default class App extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      isShow: false,
      random: 0,
    };
  }
  render() {
    const handleToggle = () => {
      this.setState({
        isShow: !this.state.isShow,
      });
    };

    const handleRandom = () => {
      this.setState({
        random: Math.ceil(Math.random() * 100),
      });
    };

    return (
      <div>
        {/* <h1>Component App</h1>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleRandom}>Random</button>

        <hr />

        {this.state.isShow && <LifecycleComponent random={this.state.random} />} */}

        {/* <ControlledForm /> */}

        <UNControlledForm />
      </div>
    );
  }
}
