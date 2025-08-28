import { useTheme } from "./ThemeContext";

export default function Header() {
  const { toggleTheme } = useTheme();
  return (
    <header style={{ textAlign: "center", padding: "24px 0" }}>
      <h1 style={{ marginBottom: 16, fontSize: 56 }}>My Themed App</h1>
      <button onClick={toggleTheme} style={{ fontSize: 18 }}>
        Toggle Theme
      </button>
    </header>
  );
}
