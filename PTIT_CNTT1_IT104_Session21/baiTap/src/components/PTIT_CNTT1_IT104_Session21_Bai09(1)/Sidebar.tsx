import React from "react";
import { Layout, Menu } from "antd";
import {
  DollarOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => ({ key, icon, children, label } as MenuItem);

const items: MenuItem[] = [
  getItem("Tổng Quan", "1", <PieChartOutlined />),
  getItem("Quản lý tiền lương", "2", <DollarOutlined />),
  getItem("Quản lý nhân sự", "sub1", <UserOutlined />, [
    getItem("Danh sách nhân viên", "3"),
    getItem("Thêm nhân viên", "4"),
    getItem("Quản lý phòng ban", "5"),
  ]),
  getItem("Quản lý đào tạo", "sub2", <TeamOutlined />, [
    getItem("Khoá học", "6"),
    getItem("Lịch đào tạo", "8"),
  ]),
  getItem("Quản lý tài liệu", "9", <FileOutlined />, [
    getItem("Chính sách công ty", "10"),
    getItem("Quy trình làm việc", "11"),
    getItem("Lịch đào tạo", "12"),
  ]),
];

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => (
  <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
    <div className="demo-logo-vertical" />
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={items}
    />
  </Sider>
);

export default Sidebar;
