import {
  DashboardOutlined,
  DollarOutlined,
  FileTextOutlined,
  LeftOutlined,
  LineChartOutlined,
  UserOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useAppDisPath, useAppSelector } from "../hooks/useCustomRedux";
import { changeStatus } from "../slices/sideBarSlice";
export default function SideBar() {
  const sideBarIsOpen = useAppSelector((state) => state.sideBar.isSizeBarOpen);
  const dispatch = useAppDisPath();

  const handleCollapseClick = () => {
    dispatch(changeStatus());
  };

  const items = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Bảng điều khiển" },
    { key: "account", icon: <UserOutlined />, label: "Tài khoản" },
    { key: "asset", icon: <DollarOutlined />, label: "Tài sản" },
    { key: "stats", icon: <LineChartOutlined />, label: "Thống kê" },
    { key: "docs", icon: <FileTextOutlined />, label: "Tài liệu" },
    {
      key: "collapse",
      icon: sideBarIsOpen ? <LeftOutlined /> : <RightOutlined />,
      label: "Thu gọn",
      onClick: handleCollapseClick,
    },
  ];

  return (
    <div
      className="m-20 flex flex-col gap-5 bg-gray-900 px-2 py-5"
      style={{
        width: sideBarIsOpen ? 170 : 35,
        transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        overflow: "hidden",
        borderRadius: 8,
      }}
    >
      {items.map((item) => (
        <div
          key={item.key}
          className="text-white"
          {...(item.key === "collapse"
            ? { onClick: item.onClick, style: { cursor: "pointer" } }
            : {})}
        >
          {item.icon} {sideBarIsOpen && <span>{item.label}</span>}
        </div>
      ))}
    </div>
  );
}
