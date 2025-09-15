import React, { useEffect, useRef, useState } from "react";
import { LoadingOutlined, PlusCircleFilled } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  message,
  Modal,
  notification,
  Spin,
  Table,
} from "antd";
import type { FormProps, TableColumnsType, TableProps } from "antd";
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

type FieldType = {
  id?: string;
  student_name?: string;
  email?: string;
  address?: string;
  phone?: string;
  status?: boolean;
  created_at?: string;
};

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

export default function PTIT_CNTT1_IT104_Session29_Bai09() {
  const [data, setData] = useState<DataType[]>([]);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const formRef = useRef<any>(null);

  const loadApiStudent = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await studentAPI.get("students");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadApiStudent();
  }, []);

  // Logic add & edit
  const showModalAdd = () => {
    setIsEditMode(false);
    setIsModalAddOpen(true);
    setTimeout(() => {
      formRef.current?.resetFields();
    }, 0);
  };

  const showModalEdit = (student: DataType) => {
    setIsEditMode(true);
    setIsModalAddOpen(true);
    setTimeout(() => {
      formRef.current?.setFieldsValue({
        student_name: student.student_name,
        email: student.email,
        address: student.address,
        phone: student.phone,
      });
    }, 0);
    setSelectedStudent(student);
  };

  const handleCancelAdd = () => {
    setIsModalAddOpen(false);
    setSelectedStudent(null);
  };

  const handleAddOrEditStudent: FormProps<FieldType>["onFinish"] = async (
    values
  ) => {
    if (isEditMode && selectedStudent) {
      // Edit mode
      try {
        const response = await studentAPI.put(
          `students/${selectedStudent.id}`,
          {
            ...selectedStudent,
            student_name: values.student_name,
            email: values.email,
            address: values.address,
            phone: values.phone,
          }
        );
        if (response.status === 200) {
          message.open({
            type: "success",
            content: "Cập nhật sinh viên thành công",
          });
          loadApiStudent();
          setIsModalAddOpen(false);
          setSelectedStudent(null);
        }
      } catch {
        message.open({
          type: "error",
          content: "Cập nhật sinh viên thất bại",
        });
        setIsModalAddOpen(false);
        setSelectedStudent(null);
      }
    } else {
      // Add mode
      try {
        const response = await studentAPI.post("students", {
          student_name: values.student_name,
          email: values.email,
          address: values.address,
          phone: values.phone,
          status: true,
          created_at: new Date().toLocaleDateString("vi-VN"),
        });
        if (response.status === 201) {
          message.open({
            type: "success",
            content: "Thêm sinh viên thành công",
          });
          loadApiStudent();
          setIsModalAddOpen(false);
        }
      } catch {
        message.open({
          type: "error",
          content: "Thêm sinh viên thất bại",
        });
        setIsModalAddOpen(false);
      }
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  //   Logic Delete
  const showModalDelete = (student: DataType) => {
    setSelectedStudent(student);
    setIsModalDeleteOpen(true);
  };
  const handleOkDelete = () => {
    if (selectedStudent !== null) {
      handleDelete(selectedStudent);
    }
    setIsModalDeleteOpen(false);
    setSelectedStudent(null);
  };
  const handleCancelDelete = () => {
    setIsModalDeleteOpen(false);
    setSelectedStudent(null);
  };
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
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => showModalEdit(record)}
          >
            Sửa
          </Button>
          <Button type="primary" danger onClick={() => showModalDelete(record)}>
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
          onClick={showModalAdd}
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
          pagination={{ pageSize: 3 }}
        />
      </div>

      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.3)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </div>
      )}

      {/* Modal thêm sinh viên */}
      <Modal
        title={isEditMode ? "Sửa sinh viên" : "Thêm sinh viên"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalAddOpen}
        onCancel={handleCancelAdd}
        footer={null}
      >
        <Form
          name="basic"
          style={{ minWidth: 400 }}
          initialValues={{ remember: true }}
          onFinish={handleAddOrEditStudent}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          ref={formRef}
        >
          <Form.Item<FieldType>
            label="Name Student"
            name="student_name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email Student"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Address Student"
            name="address"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone Student"
            name="phone"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null} style={{ textAlign: "right" }}>
            <Button
              type="default"
              htmlType="button"
              style={{ marginRight: 10 }}
              onClick={handleCancelAdd}
            >
              Huỷ
            </Button>
            <Button type="primary" htmlType="submit">
              {isEditMode ? "Cập nhật" : "Thêm sinh viên"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal xoá sinh viên */}
      <Modal
        title="Xoá sinh viên"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalDeleteOpen}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
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
