import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { studentAPI } from "../utils/http";

type FieldType = {
  nameStudent?: string;
  emailStudent?: string;
  addressStudent?: string;
  phoneStudent?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
  try {
    const response = await studentAPI.post("students", {
      student_name: values.nameStudent,
      email: values.emailStudent,
      address: values.addressStudent,
      phone: values.phoneStudent,
      status: true,
      created_at: new Date().toLocaleDateString("vi-VN"),
    });

    if (response.status === 201) {
      message.open({
        type: "success",
        content: "Thêm sinh viên thành công",
      });
    }
  } catch {
    message.open({
      type: "error",
      content: "Thêm sinh viên thất bại",
    });
  }
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function PTIT_CNTT1_IT104_Session29_Bai06() {
  return (
    <div
      style={{
        paddingTop: 200,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form
        name="basic"
        style={{ minWidth: 400 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Name Student"
          name="nameStudent"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email Student"
          name="emailStudent"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Address Student"
          name="addressStudent"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Phone Student"
          name="phoneStudent"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Thêm sinh viên
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
