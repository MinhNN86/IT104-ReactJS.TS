import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Layout_Ex09() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: "#fff",
    textDecoration: "none",
    marginRight: 36,
    padding: "12px 32px",
    borderRadius: 10,
    background: isActive ? "rgba(255,255,255,0.4)" : "transparent",
    fontSize: 22,
    transition: "0.2s",
    fontWeight: 400,
  });

  return (
    <div>
      <header>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            background: "#4D97FF",
            padding: 16,
            borderRadius: 12,
            margin: 24,
            minWidth: 300,
          }}
        >
          <NavLink style={linkStyle} to="/ex09" end>
            Contact
          </NavLink>
          <NavLink style={linkStyle} to="/ex09/about">
            About
          </NavLink>
          <NavLink style={linkStyle} to="/ex09/post">
            Post
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
