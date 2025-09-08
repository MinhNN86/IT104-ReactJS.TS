import {
  LoginFormPage,
  ProConfigProvider,
  ProFormText,
} from "@ant-design/pro-components";
import { notification, Space, theme } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";

interface User {
  email?: string;
  password?: string;
}

export default function Login_Ex03() {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const onFinish = async (values: User) => {
    console.log("submit:", values);
    const userData: User[] | [] = JSON.parse(
      localStorage.getItem("userData") || "[]"
    );

    const checkLogin = userData.find(
      (user: User) => user.email === values.email
    );
    if (!checkLogin) {
      notification.error({ message: "Email does not exist" });
      return;
    }
    if (checkLogin.password !== values.password) {
      notification.error({ message: "Incorrect password" });
      return;
    }

    localStorage.setItem("userLogin", JSON.stringify(checkLogin));
    notification.success({ message: "Login successful" });
    navigate("/home-pages");
  };

  return (
    <ProConfigProvider dark>
      <div style={{ backgroundColor: "#fff", height: "100vh" }}>
        <LoginFormPage
          backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
          backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          title="Login account"
          containerStyle={{
            backgroundColor: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
          }}
          onFinish={onFinish}
          submitter={{
            searchConfig: { submitText: "Login an account" },
            submitButtonProps: {
              size: "large",
              style: { height: 44, width: "100%" },
            },
          }}
        >
          <ProFormText
            name="email"
            label="Your email"
            placeholder="name@company.com"
            fieldProps={{
              size: "large",
              type: "email",
              autoComplete: "email",
              prefix: <MailOutlined style={{ color: token.colorText }} />,
            }}
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Email is not valid" },
            ]}
          />

          <ProFormText.Password
            name="password"
            label="Password"
            placeholder="••••••••"
            fieldProps={{
              size: "large",
              autoComplete: "current-password",
              prefix: <LockOutlined style={{ color: token.colorText }} />,
            }}
            rules={[{ required: true, message: "Please enter your password" }]}
          />

          <div
            style={{
              textAlign: "center",
              marginTop: 8,
              marginBottom: 30,
            }}
          >
            <span style={{ color: "#fff" }}>Already have an account? </span>
            <a onClick={() => navigate("/register")}>Register here</a>
          </div>

          <Space
            align="center"
            size={24}
            style={{ display: "flex", justifyContent: "center" }}
          ></Space>
        </LoginFormPage>
      </div>
    </ProConfigProvider>
  );
}
