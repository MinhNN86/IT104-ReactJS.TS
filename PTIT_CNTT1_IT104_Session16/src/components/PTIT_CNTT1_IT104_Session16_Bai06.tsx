import React, { Component } from "react";
type StateType = {
  isDarkMode: boolean;
};
export default class PTIT_CNTT1_IT104_Session16_Bai06 extends Component<
  object,
  StateType
> {
  constructor(props: object) {
    super(props);

    this.state = {
      isDarkMode: false,
    };
  }
  render() {
    const handleClick = () => {
      this.setState({
        isDarkMode: !this.state.isDarkMode,
      });
    };
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: this.state.isDarkMode ? "#222" : "#f5f5f5",
          color: this.state.isDarkMode ? "#fff" : "#222",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        {this.state.isDarkMode ? (
          <div>🌙 Chế độ Tối đang bật</div>
        ) : (
          <div>☀️ Chế độ Sáng đang bật</div>
        )}

        <button
          style={{
            marginTop: "20px",
            padding: 10,
            borderRadius: 10,
            border: "1px solid white",
            color: "white",
            backgroundColor: "#1976D2",
          }}
          onClick={handleClick}
        >
          Chuyển theme
        </button>
      </div>
    );
  }
}
