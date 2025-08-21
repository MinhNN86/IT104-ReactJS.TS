import React, { Component } from "react";

type PropTypes = {
  random?: number;
};

type StateTypes = {
  email?: string;
};

export default class LifecycleComponent extends Component<
  PropTypes,
  StateTypes
> {
  constructor(props: PropTypes) {
    console.log("Hàm constructor được khởi tạo");

    super(props);

    this.state = {
      email: "",
    };
  }

  componentWillMount(): void {
    console.log("Component will mount được gọi");
  }

  componentDidMount(): void {
    console.log("Component did mount được gọi");
  }

  componentWillReceiveProps(nextProps: Readonly<PropTypes>): void {
    console.log(nextProps);
  }

  shouldComponentUpdate(): boolean {
    return true; // Ngăn chặn component re-render ( nếu là false )
  }

  componentWillUpdate(
    nextProps: Readonly<PropTypes>,
    nextState: Readonly<StateTypes>
  ): void {
    console.log("Component will update được gọi");
    console.log(nextProps);
    console.log(nextState);
  }

  componentDidUpdate(
    prevProps: Readonly<PropTypes>,
    prevState: Readonly<StateTypes>
  ): void {
    console.log("Component did update được gọi");
  }

  componentWillUnmount(): void {
    console.log("Component will unmount được gọi");
  }

  render() {
    console.log("Component được render");

    return (
      <div>
        <h1>Random: {this.props.random}</h1>
        <h1>Lifecycle Component</h1>
      </div>
    );
  }
}
