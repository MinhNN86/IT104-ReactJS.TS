import SidebarMenu from "./SidebarMenu";
import HeaderBar from "./HeaderBar";

import { ReactNode, useState } from "react";

type Props = { children: ReactNode };

export default function LayoutDashboard({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex h-screen bg-[#091e36]">
      <SidebarMenu collapsed={collapsed} />
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
        <HeaderBar
          collapsed={collapsed}
          onToggleCollapse={handleToggleCollapse}
        />
        <main className="flex-1 pt-1 pl-6 pr-6 overflow-auto">{children}</main>
        <footer className="text-xs text-center py-3 bg-[#e4e9f2] text-gray-500">
          ©2025 Created by MinhNN
        </footer>
      </div>
    </div>
  );
}
