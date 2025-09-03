import { Menu } from "antd";
import {
  AppstoreOutlined,
  DollarOutlined,
  UserOutlined,
  BookOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

interface SidebarMenuProps {
  collapsed: boolean;
}

export default function SidebarMenu({ collapsed }: SidebarMenuProps) {
  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-[#091e36] min-h-screen text-white transition-all duration-300 mt-3`}
    >
      {/* <div
        className={`h-14 flex items-center px-4 font-bold text-lg ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <AppstoreOutlined className="mr-2" />
        {!collapsed && "Tổng quan"}
      </div> */}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["overview"]}
        inlineCollapsed={collapsed}
        style={{ background: "transparent", border: "none" }}
        items={[
          {
            key: "all",
            icon: <AppstoreOutlined />,
            label: "Tổng quan",
          },
          {
            key: "salary",
            icon: <DollarOutlined />,
            label: "Quản lý tiền lương",
          },
          {
            key: "employee",
            icon: <UserOutlined />,
            label: "Quản lý nhân sự",
            children: [
              { key: "employee-list", label: "Quản lý nhân viên" },
              { key: "employee-department", label: "Quản lý phòng ban" },
              { key: "employee-position", label: "Quản lý chức vụ" },
            ],
          },
          {
            key: "training",
            icon: <BookOutlined />,
            label: "Quản lý đào tạo",
            children: [
              { key: "training-courses", label: "Khóa học" },
              { key: "training-schedule", label: "Lịch đào tạo" },
              { key: "training-result", label: "Kết quả đào tạo" },
              { key: "training-certificate", label: "Chứng chỉ" },
            ],
          },
          {
            key: "docs",
            icon: <FileTextOutlined />,
            label: "Quản lý tài liệu",
            children: [
              { key: "docs-policy", label: "Chính sách công ty" },
              { key: "docs-procedure", label: "Quy trình làm việc" },
              { key: "docs-contract", label: "Hợp đồng lao động" },
              { key: "docs-form", label: "Biểu mẫu" },
            ],
          },
        ]}
      />
    </aside>
  );
}
