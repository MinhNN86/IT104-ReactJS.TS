import { v4 as uuid } from "uuid";
import { useRef } from "react";
import { useAppDisPath } from "../hooks/useCustomRedux";
import { login } from "../slices/loginSlice";
import { useNavigate } from "react-router-dom";

type UserForm = {
  id: string;
  userName: string;
  email: string;
  password: string;
};

export default function LoginForm() {
  const dispatch = useAppDisPath();
  const navigate = useNavigate();

  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    const newUser: UserForm = {
      id: uuid(),
      userName: userNameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    };
    dispatch(login(newUser));
    navigate("/user");
  };

  return (
    <div className="card m-10">
      <h1 className="title">LOGIN FORM</h1>

      <label className="label">Username</label>
      <input className="input" type="username" ref={userNameRef} />

      <label className="label">Email</label>
      <input className="input" type="email" ref={emailRef} />

      <div className="spacer" />

      <label className="label">Password</label>
      <input className="input" type="password" ref={passwordRef} />

      <button className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
