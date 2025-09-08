import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function NavLink_Ex06() {
  const customStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? {
          backgroundColor: "red",
          color: "white",
        }
      : {};
  };
  return (
    <div style={{ padding: 20 }}>
      <nav style={{ display: "flex", gap: 20 }}>
        <NavLink style={customStyle} end to="/">
          Home
        </NavLink>
        <NavLink style={customStyle} to="/product">
          Product
        </NavLink>
        <NavLink style={customStyle} to="/detail">
          Detail
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
