import { Button, Form, Input, notification } from "antd";
import type { FormProps } from "antd/lib";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

type FieldType = {
  email?: string;
  password?: string;
};

const onFinish = (values: FieldType, navigate: (path: string) => void) => {
  console.log(values);
  const userData: User[] = JSON.parse(localStorage.getItem("userData") || "[]");
  const existed = userData.some((user: User) => user.email === values.email);
  if (existed) {
    notification.error({ message: "Email already exists!" });
    return;
  }
  userData.push({
    email: values.email as string,
    password: values.password as string,
  });
  localStorage.setItem("userData", JSON.stringify(userData));
  notification.success({ message: "Register success!" });
  navigate("/ex08/login");
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Register_Ex08() {
  const navigate = useNavigate();

  const handleFinish = (values: FieldType) => onFinish(values, navigate);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="text-center font-bold text-4xl mb-5">Create account</h1>
      <Form
        name="basic"
        style={{ width: 350 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Your email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Email is not valid!" },
          ]}
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

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <p>
        <span style={{ color: "#8c8c8c" }}>Already have an account? </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/ex08/login")}
        >
          Login here
        </span>
      </p>
    </div>
  );
}
