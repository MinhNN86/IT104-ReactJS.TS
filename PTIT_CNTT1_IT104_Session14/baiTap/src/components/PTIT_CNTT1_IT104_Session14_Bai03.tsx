import React, { Component, createRef } from "react";

type StateType = {
  dob: string;
};

export default class PTIT_CNTT1_IT104_Session14_Bai03 extends Component<
  object,
  StateType
> {
  private dateRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);

    this.state = {
      dob: "",
    };
  }
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const raw = this.dateRef.current?.value || "";
      this.setState({ dob: raw });
    };

    const formateVi = (raw: string): string | "" => {
      if (!raw) return "";
      const d = new Date(raw);
      return isNaN(d.getTime()) ? raw : d.toLocaleDateString("vi-VN");
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>Ngày sinh: {formateVi(this.state.dob)}</div>
          <input type="date" ref={this.dateRef} />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
