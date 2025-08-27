import React, { useState } from "react";

type ThemeContextTypes = {
  theme: "light" | "dark";
  language: "vn" | "en";
  handleChangeTheme: () => void;
};

export const ThemeProvider = React.createContext<ThemeContextTypes | null>(
  null
);

type PropTypes = {
  children?: React.ReactNode;
};

export default function ThemeContext({ children }: PropTypes) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [language, setLanguage] = useState<"vn" | "en">("en");
  // Hàm cập nhật chế độ tối
  const handleChangeTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider.Provider value={{ theme, language, handleChangeTheme }}>
      {/* Phạm vi chứa tất cả các component sử dụng context */}
      {children}
    </ThemeProvider.Provider>
  );
}
