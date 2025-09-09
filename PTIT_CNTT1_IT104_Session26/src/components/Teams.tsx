import { Link, Outlet } from "react-router-dom";

export default function Teams() {
  return (
    <div style={{ padding: 16 }}>
      <h2>Teams</h2>

      {/* Demo link đến vài team cụ thể */}
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="">Tất cả đội (index)</Link>
        <Link to="alpha">Team Alpha</Link>
        <Link to="beta">Team Beta</Link>
        <Link to="gamma">Team Gamma</Link>
      </nav>

      {/* Nơi render TeamsIndex (khi /teams) hoặc Team (khi /teams/:teamId) */}
      <Outlet />
    </div>
  );
}
