import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "./Header";
import Content from "./Content";
import "./index.css";

export default function PTIT_CNTT1_IT104_Session19_Bai02() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
    </div>
  );
}
