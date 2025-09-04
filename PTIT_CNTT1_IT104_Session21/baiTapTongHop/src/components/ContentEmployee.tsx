import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  type FormProps,
} from "antd";
import Search from "antd/es/input/Search";
import { ReloadOutlined } from "@ant-design/icons";
import TableEmployee from "./TableEmployee";
import { useEffect, useState } from "react";
import { v6 as uuid } from "uuid";

interface DataType {
  id?: string;
  name?: string;
  age?: number;
  address?: string;
  number?: string;
}

type FieldType = {
  id?: string;
  name?: string;
  age?: number;
  address?: string;
  number?: string;
};

export default function ContentEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataEmployee, setDataEmployee] = useState<DataType[] | []>([]);
  const [editingEmployee, setEditingEmployee] = useState<DataType | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    setDataEmployee(JSON.parse(localStorage.getItem("employeeData") || "[]"));
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingEmployee(null);
    form.resetFields();
  };

  const openAddModal = () => {
    setEditingEmployee(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const openEditModal = (employee: DataType) => {
    setEditingEmployee(employee);
    form.setFieldsValue(employee);
    setIsModalOpen(true);
  };

  const handleDelete = (employee: DataType) => {
    Modal.confirm({
      title: "Xác nhận xóa",
      content: `Bạn có chắc chắn muốn xóa nhân viên "${employee.name}" không?`,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk() {
        const updatedEmployees = dataEmployee.filter(
          (emp) => emp.id !== employee.id
        );
        setDataEmployee(updatedEmployees);
        localStorage.setItem("employeeData", JSON.stringify(updatedEmployees));

        notification.success({
          message: "Thành công",
          description: "Xóa nhân viên thành công",
        });
      },
    });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (editingEmployee) {
      // Cập nhật nhân viên
      const updatedEmployees = dataEmployee.map((emp) =>
        emp.id === editingEmployee.id ? { ...editingEmployee, ...values } : emp
      );
      setDataEmployee(updatedEmployees);
      localStorage.setItem("employeeData", JSON.stringify(updatedEmployees));

      notification.success({
        message: "Thành công",
        description: "Cập nhật nhân viên thành công",
      });
    } else {
      // Thêm nhân viên mới
      const newEmployee: DataType = {
        id: uuid(),
        ...values,
      };

      const updateEmployee: DataType[] = [...dataEmployee, newEmployee];
      setDataEmployee(updateEmployee);
      localStorage.setItem("employeeData", JSON.stringify(updateEmployee));

      notification.success({
        message: "Thành công",
        description: "Thêm nhân viên thành công",
      });
    }

    closeModal();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Nhân viên</div>
        <Button type="primary" onClick={openAddModal}>
          Thêm nhân viên
        </Button>
      </div>

      <div className="flex justify-end align-middle my-4">
        <Search
          placeholder="Tìm kiếm nhân viên theo tên"
          style={{ width: 300, marginRight: 10 }}
        />
        <ReloadOutlined className="text-lg" />
      </div>

      <TableEmployee
        dataEmployee={dataEmployee}
        onEdit={openEditModal}
        onDelete={handleDelete}
      />

      <Modal
        title={editingEmployee ? "Sửa nhân viên" : "Thêm nhân viên"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={closeModal}
        footer={false}
      >
        <Form
          form={form}
          name="formEmployee"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            required={true}
            label={<h3 className="font-medium">Họ và tên</h3>}
            name="name"
            rules={[{ required: true, message: "Tên không được để trống" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Tuổi"
            name="age"
            required={true}
            rules={[{ required: true, message: "Tuổi không được để trống" }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item<FieldType>
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Địa chỉ không được để trống" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Số điện thoại"
            name="number"
            rules={[
              { required: true, message: "Số điện thoại không được để trống" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <div className="flex justify-end gap-4">
              <Button htmlType="button" onClick={closeModal}>
                Hủy
              </Button>
              <Button type="primary" htmlType="submit">
                Lưu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
