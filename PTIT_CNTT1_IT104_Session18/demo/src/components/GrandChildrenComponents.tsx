import React, { useContext } from "react";
import ThemeContext, { ThemeProvider } from "../context/ThemeContext";
import useGlobalContext from "../hooks/useGlobalContext";

export default function GrandChildrenComponents() {
  const result = useContext(ThemeProvider);

  const { theme, handleChangeTheme } = useGlobalContext();
  return (
    <div>
      <h1>GrandChildrenComponents</h1>
      {/* <button onClick={result?.handleChangeTheme}>
        Chế độ {result?.theme === "light" ? "sáng" : "tối"}
      </button> */}

      <button onClick={handleChangeTheme}>
        Chế độ {theme === "light" ? "sáng" : "tối"}
      </button>
    </div>
  );
}
