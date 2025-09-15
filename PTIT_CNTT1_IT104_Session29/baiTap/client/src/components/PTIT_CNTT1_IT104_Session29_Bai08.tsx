import React, { useEffect, useState } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Modal, notification, Table } from "antd";
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

export default function PTIT_CNTT1_IT104_Session29_Bai08() {
  const [data, setData] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<DataType | null>(null);

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

  const handleDelete = async (studentDelete: DataType) => {
    try {
      const response = await studentAPI.delete(`students/${studentDelete.id}`);

      if (response.status === 200) {
        notification.success({ message: "Xoá thành công" });
      }
      loadApiStudent();
    } catch (error) {
      notification.error({ message: "Xoá không thành công" });
      console.log(error);
    }
  };

  const showModal = (student: DataType) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedStudent !== null) {
      handleDelete(selectedStudent);
    }
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

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
      render: (_, record) => (
        <>
          <Button type="primary" style={{ marginRight: 8 }}>
            Sửa
          </Button>
          <Button type="primary" danger onClick={() => showModal(record)}>
            Xóa
          </Button>
        </>
      ),
    },
  ];

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

      <Modal
        title="Xoá sinh viên"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          {selectedStudent
            ? `Bạn chắc chắn muốn xoá sinh viên "${selectedStudent.student_name}"?`
            : "Bạn chắc chắn muốn xoá sinh viên?"}
        </p>
      </Modal>
    </div>
  );
}
