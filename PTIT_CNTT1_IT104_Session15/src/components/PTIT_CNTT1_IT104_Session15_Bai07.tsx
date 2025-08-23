import React, { Component } from "react";

type State = {
  time: Date;
};

export default class Clock extends Component<{}, State> {
  // Không dùng NodeJS.Timer
  private timerId?: ReturnType<typeof setInterval>;

  constructor(props: {}) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    const { time } = this.state;
    const h = time.getHours().toString().padStart(2, "0");
    const m = time.getMinutes().toString().padStart(2, "0");
    const s = time.getSeconds().toString().padStart(2, "0");

    return (
      <div>
        Thời gian hiện tại: {h} : {m} : {s}
      </div>
    );
  }
}
