import {
  Table,
  Button,
  Input,
  Pagination,
  Breadcrumb,
  ConfigProvider,
} from "antd";
import viVN from "antd/es/locale/vi_VN";
import EmployeeActions from "./EmployeeActions";
import { useState } from "react";

// Dữ liệu mẫu
const employees = [
  {
    key: 1,
    name: "Nguyễn Văn A",
    dob: "01/01/1990",
    gender: "Nam",
    email: "a.nguyen@example.com",
    address: "123 Đường ABC, Quận 1, TPHCM",
    phone: "0909123456",
  },
  {
    key: 2,
    name: "Trần Thị B",
    dob: "12/12/1995",
    gender: "Nữ",
    email: "b.tran@example.com",
    address: "456 Đường XYZ, Quận 3, TPHCM",
    phone: "0987654321",
  },
  {
    key: 3,
    name: "Lê Minh C",
    dob: "05/06/1988",
    gender: "Nam",
    email: "c.le@example.com",
    address: "789 Đường DEF, Quận 10, TPHCM",
    phone: "0912345678",
  },
];

const columns = [
  { title: "Họ và tên", dataIndex: "name", key: "name" },
  { title: "Ngày sinh", dataIndex: "dob", key: "dob" },
  { title: "Giới tính", dataIndex: "gender", key: "gender" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Địa chỉ", dataIndex: "address", key: "address" },
  { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
  {
    title: "Hành động",
    key: "actions",
    render: () => <EmployeeActions />,
    width: 140,
  },
];

export default function EmployeeTable() {
  const [search, setSearch] = useState("");

  const paginationLocale = {
    ...viVN,
    Pagination: {
      ...viVN.Pagination,
      items_per_page: "bản ghi/ trang",
    },
  };

  return (
    <>
      <div>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[
            { title: "Quản lý nhân sự" },
            { title: "Quản lý nhân viên" },
            { title: "Danh sách nhân viên" },
          ]}
        />
      </div>
      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-lg">Nhân viên</h2>
          <Button type="primary">Thêm mới nhân viên</Button>
        </div>
        <div className="flex items-center justify-end mb-2">
          <Input.Search
            placeholder="Tìm kiếm nhân viên theo tên"
            className="w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
          />
        </div>
        <Table
          columns={columns}
          dataSource={employees}
          pagination={false}
          rowSelection={{}}
          bordered={false}
          className="mb-4"
        />
        <div className="flex items-center justify-end mt-4">
          <ConfigProvider locale={paginationLocale}>
            <Pagination showSizeChanger defaultCurrent={3} total={500} />
          </ConfigProvider>
        </div>
      </section>
    </>
  );
}
