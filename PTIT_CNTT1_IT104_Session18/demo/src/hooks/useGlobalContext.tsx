import React, { useContext } from "react";
import ThemeContext, { ThemeProvider } from "../context/ThemeContext";

export default function useGlobalContext() {
  const context = useContext(ThemeProvider);

  if (!context) {
    throw new Error("Giá trị không hợp lệ");
  }

  return context;
}
