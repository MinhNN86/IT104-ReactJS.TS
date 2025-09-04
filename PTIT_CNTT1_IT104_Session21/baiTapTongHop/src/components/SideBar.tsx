import { Menu, type MenuProps } from "antd";
import {
  DollarOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Tổng quan", "1", <PieChartOutlined />),
  getItem("Quản lý tiền lương", "2", <DollarOutlined />),
  getItem("Quản lý nhân sự", "sub1", <UserOutlined />, [
    getItem("Quản lý nhân viên", "3"),
    getItem("Quản lý vị trí", "4"),
  ]),
  getItem("Quản lý đào tạo", "sub2", <TeamOutlined />, [
    getItem("Quản lý khoá học", "6"),
  ]),
  getItem("Quản lý tài liệu", "9", <FileOutlined />, [
    getItem("Thêm tài liệu", "7"),
  ]),
];

export default function SideBar() {
  return (
    <>
      <div className="demo-logo-vertical pt-1" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </>
  );
}
