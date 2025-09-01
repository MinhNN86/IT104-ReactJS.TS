import SidebarMenu from "./SidebarMenu";
import HeaderBar from "./HeaderBar";

import { ReactNode } from "react";

export default function LayoutDashboard({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[#091e36]">
      <SidebarMenu />
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
        <HeaderBar />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
        <footer className="text-xs text-center py-3 bg-[#e4e9f2] text-gray-500">
          Rikkei Education ©2025 Created by NVQUY
        </footer>
      </div>
    </div>
  );
}
