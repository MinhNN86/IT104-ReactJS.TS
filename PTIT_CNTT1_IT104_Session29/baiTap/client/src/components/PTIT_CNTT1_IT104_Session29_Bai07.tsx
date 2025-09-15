import React, { useEffect, useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { studentAPI } from "../utils/http";

interface DataType {
  id: string;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Tên sinh viên",
    dataIndex: "student_name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
  },
  {
    title: "Lựa chọn",
    render: () => (
      <>
        <Button type="primary" style={{ marginRight: 8 }}>
          Sửa
        </Button>
        <Button type="primary" danger>
          Xóa
        </Button>
      </>
    ),
  },
];

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>["rowSelection"] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

export default function PTIT_CNTT1_IT104_Session29_Bai07() {
  const [data, setData] = useState<DataType[]>([]);

  const loadApiStudent = async (): Promise<void> => {
    try {
      const response = await studentAPI.get("students");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadApiStudent();
  }, []);

  return (
    <div style={{ margin: "20px 200px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 30px",
          backgroundColor: "#595959",
          borderRadius: 5,
        }}
      >
        <h2 className="text-white text-2xl">Quản lý sinh viên</h2>
        <Button
          type="primary"
          style={{ background: "#389e0d", borderColor: "#389e0d" }}
        >
          <PlusCircleFilled />
          Thêm mới sinh viên
        </Button>
      </div>
      <div style={{ marginTop: 20 }}>
        <Table<DataType>
          rowSelection={{ type: "checkbox", ...rowSelection }}
          columns={columns}
          dataSource={data}
          rowKey="id"
        />
      </div>
    </div>
  );
}
