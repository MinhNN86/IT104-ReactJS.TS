import {
  Button,
  Form,
  Input,
  notification,
  Select,
  type FormProps,
} from "antd";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
  role?: "Admin" | "User";
};

interface User {
  email: string;
  password: string;
  role: "Admin" | "User";
}

const users: User[] = [
  {
    email: "admin123@gmail.com",
    password: "123",
    role: "Admin",
  },
  {
    email: "user123@gmail.com",
    password: "123",
    role: "User",
  },
];

export default function Login_Ex05() {
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { email, password, role } = values;
    const checkUser = users.find((user) => user.email === email);
    if (!checkUser) {
      notification.error({ message: "Incorrect login information" });
      return;
    }
    if (checkUser.password !== password) {
      notification.error({ message: "Incorrect login information" });
      return;
    }
    if (checkUser.role !== role) {
      notification.error({ message: "Incorrect login information" });
      return;
    }
    navigate("/account-page");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form
        name="basic"
        style={{ width: 300 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Role"
          name="role"
          rules={[{ required: true, message: "Please choose your role!" }]}
        >
          <Select
            placeholder="Chọn role"
            options={[
              { label: "Admin", value: "Admin" },
              { label: "User", value: "User" },
            ]}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
