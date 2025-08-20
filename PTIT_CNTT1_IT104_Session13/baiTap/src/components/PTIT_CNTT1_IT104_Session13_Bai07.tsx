import React, { Component } from "react";

type StateTypes = {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
};

export default class PTIT_CNTT1_IT104_Session13_Bai07 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      theme: "dark",
      language: "english",
    };
  }
  render() {
    const { theme, language } = this.state;

    const stylePage: React.CSSProperties = {
      padding: "20px",
      backgroundColor: theme === "light" ? "#fff" : "#000",
      color: theme === "light" ? "#000" : "#fff",
      minHeight: "100vh",
      width: "100%",
    };

    const themeTextVI = theme === "light" ? "Sáng" : "Tối";
    const themeTextEN = theme === "light" ? "Light" : "Dark";

    return (
      <div style={stylePage}>
        {language === "vietnamese" ? (
          <>
            <div>Nền: {themeTextVI}</div>
            <div>Ngôn ngữ: Tiếng Việt</div>
          </>
        ) : (
          <>
            <div>Background: {themeTextEN}</div>
            <div>Language: English</div>
          </>
        )}
      </div>
    );
  }
}
