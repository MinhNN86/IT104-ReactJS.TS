import React, { Component } from "react";

type State = {
  count: number;
};

export default class PTIT_CNTT1_IT104_Session15_Bai08 extends Component<
  object,
  State
> {
  private timeId?: ReturnType<typeof setInterval>;

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    this.timeId = setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11,
      }));
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
