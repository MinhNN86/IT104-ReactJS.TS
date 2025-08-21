import React, { Component, createRef } from "react";
type Gender = "Nam" | "Nữ" | "Khác" | "";
type StateTypes = {
  gender: Gender;
};

export default class PTIT_CNTT1_IT104_Session14_Bai06 extends Component<
  object,
  StateTypes
> {
  private formRef = createRef<HTMLFormElement>();
  constructor(props: object) {
    super(props);

    this.state = {
      gender: "",
    };
  }
  render() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = this.formRef.current;
      const checked = form?.querySelector(
        'input[name="gender"]:checked'
      ) as HTMLInputElement | null;

      const value = (checked?.value as Gender) || "";
      this.setState({ gender: value });
    };

    return (
      <div>
        <h2>Giới tính: {this.state.gender}</h2>
        <form ref={this.formRef} onSubmit={handleSubmit}>
          <label>
            <input type="radio" name="gender" value="Nam" /> Nam
          </label>
          <br />

          <label>
            <input type="radio" name="gender" value="Nữ" /> Nữ
          </label>
          <br />

          <label>
            <input type="radio" name="gender" value="Khác" /> Khác
          </label>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
