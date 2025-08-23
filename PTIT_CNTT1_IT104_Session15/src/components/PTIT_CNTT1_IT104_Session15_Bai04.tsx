import React, { Component, createRef } from "react";
type StateTypes = {
  process?: number;
};
export default class PTIT_CNTT1_IT104_Session14_Bai04 extends Component<
  object,
  StateTypes
> {
  private rangeRef = createRef<HTMLInputElement>();
  constructor(props: object) {
    super(props);

    this.state = {
      process: 0,
    };
  }
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      this.setState({ process: Number(this.rangeRef.current?.value) });
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>Tiến độ hoàn thành: {this.state.process}%</div>
          <input type="range" ref={this.rangeRef} />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
