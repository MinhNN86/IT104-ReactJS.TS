import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  Table,
  Tag,
  Form,
  Pagination,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";

// Kiểu dữ liệu cho 1 thành viên
type Member = {
  key: string;
  name: string;
  phone: string;
  status: "active" | "locked";
};

// Dữ liệu mẫu
const initialData: Member[] = [
  {
    key: "1",
    name: "Nguyễn Văn An",
    phone: "0987654321",
    status: "active",
  },
  {
    key: "2",
    name: "Trần Thị Bình",
    phone: "0912345678",
    status: "locked",
  },
  {
    key: "3",
    name: "Lê Văn Cường",
    phone: "0905558889",
    status: "active",
  },
];

const statusOptions = [
  { value: "active", label: "Hoạt động" },
  { value: "locked", label: "Bị khóa" },
];

const statusTag = (status: Member["status"]) =>
  status === "active" ? (
    <Tag color="green">Hoạt động</Tag>
  ) : (
    <Tag color="orange">Bị khóa</Tag>
  );

export default function ManagerUser() {
  const [form] = Form.useForm();
  const [data, setData] = useState<Member[]>(initialData);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [editingKey, setEditingKey] = useState<string | null>(null);

  // Thêm mới hoặc lưu chỉnh sửa
  const handleFinish = (values: {
    name: string;
    phone: string;
    status: Member["status"];
  }) => {
    if (editingKey) {
      // Cập nhật bản ghi đang sửa
      setData((prev) =>
        prev.map((item) =>
          item.key === editingKey ? { ...item, ...values } : item
        )
      );
      message.success("Đã cập nhật thành viên!");
      setEditingKey(null);
    } else {
      // Thêm mới
      setData((prev) => [...prev, { key: Date.now().toString(), ...values }]);
      message.success("Thêm thành viên thành công!");
    }

    form.resetFields();
  };

  // Xóa thành viên
  const handleDelete = (key: string) => {
    setData((prev) => prev.filter((item) => item.key !== key));
    message.success("Đã xóa thành viên!");

    // Nếu đang sửa đúng bản ghi vừa xóa thì hủy chế độ sửa
    if (editingKey === key) {
      setEditingKey(null);
      form.resetFields();
    }
  };

  // Bắt đầu sửa: fill dữ liệu vào form
  const handleEdit = (record: Member) => {
    form.setFieldsValue({
      name: record.name,
      phone: record.phone,
      status: record.status,
    });
    setEditingKey(record.key);
  };

  const handleCancelEdit = () => {
    setEditingKey(null);
    form.resetFields();
  };

  // Cột bảng
  const columns: ColumnsType<Member> = [
    {
      title: "Tên thành viên",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status: Member["status"]) => statusTag(status),
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            size="small"
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(record)}
          >
            Sửa
          </Button>
          <Button danger size="small" onClick={() => handleDelete(record.key)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

  // Phân trang (client-side)
  const paginatedData = data.slice(
    (current - 1) * pageSize,
    current * pageSize
  );

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <div
        style={{
          background: "#2563eb",
          color: "#fff",
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          padding: 24,
          borderRadius: 10,
          marginBottom: 30,
          letterSpacing: 1,
        }}
      >
        <span style={{ marginRight: 10, fontSize: 28 }}>🔑</span>
        Quản Lý Thành Viên
      </div>

      <div
        style={{
          background: "#fff",
          padding: 28,
          borderRadius: 10,
          marginBottom: 28,
          boxShadow: "0 1px 6px rgba(60,60,60,0.06)",
        }}
      >
        <h3>
          + {editingKey ? "Sửa thông tin thành viên" : "Thêm thành viên mới"}
        </h3>
        <Form
          layout="inline"
          form={form}
          onFinish={handleFinish}
          style={{ marginTop: 16 }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input placeholder="Tên thành viên" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item
            name="status"
            rules={[{ required: true, message: "Chọn trạng thái!" }]}
          >
            <Select
              placeholder="Hoạt động"
              style={{ minWidth: 130 }}
              options={statusOptions}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingKey ? "Lưu" : "Thêm"}
            </Button>
          </Form.Item>
          {editingKey && (
            <Form.Item>
              <Button onClick={handleCancelEdit}>Hủy</Button>
            </Form.Item>
          )}
        </Form>
      </div>

      {/* Danh sách thành viên */}
      <div
        style={{
          background: "#fff",
          padding: 28,
          borderRadius: 10,
          minHeight: 300,
          boxShadow: "0 1px 6px rgba(60,60,60,0.06)",
        }}
      >
        <h3 style={{ marginBottom: 18 }}>Danh sách thành viên</h3>
        <Table
          columns={columns}
          dataSource={paginatedData}
          pagination={false}
          bordered
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 18,
          }}
        >
          <Pagination
            current={current}
            pageSize={pageSize}
            total={data.length}
            onChange={(page, pageSize) => {
              setCurrent(page);
              setPageSize(pageSize);
            }}
            showSizeChanger
            pageSizeOptions={["5", "10", "20"]}
          />
          <span>{pageSize} bản ghi / trang</span>
        </div>
      </div>
    </div>
  );
}
