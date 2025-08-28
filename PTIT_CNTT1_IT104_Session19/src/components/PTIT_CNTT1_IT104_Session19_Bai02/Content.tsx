import { useTheme } from "./ThemeContext";

export default function Content() {
  const { theme } = useTheme();

  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "0 16px" }}>
      <p style={{ fontSize: 18 }}>Đây là phần nội dung chính của ứng dụng.</p>
      <p style={{ fontSize: 20, marginTop: 20 }}>
        Theme hiện tại: <strong>{theme.toUpperCase()}</strong>
      </p>
    </main>
  );
}
