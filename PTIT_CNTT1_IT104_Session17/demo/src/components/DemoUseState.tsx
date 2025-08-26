import React, { useState } from "react";

type User = {
  email?: string;
  password?: string;
  address?: string;
  dateOfBirth?: string;
};

export default function DemoUseState() {
  const [email, setEmail] = useState<string>("test@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const [address, setAddress] = useState<string>("Hà Nội");
  const [count, setCount] = useState(0);

  //Gom nhiều kiểu dữ liệu vào 1 state
  const [user, setUser] = useState<User | null>({
    email: "nva@gmail.com",
    address: "Hà Nội",
    password: "123456",
  });

  const handleIncrease = (): void => {
    // Cập nhập giá trị của state
    setCount((prev) => prev + 1);
  };

  const handleUpdateInfo = (): void => {
    setUser({
      ...user,
      dateOfBirth: "22-09-2003",
    });
  };
  return (
    <div>
      <h1>Demo UseState</h1>
      <h2>Count: {count}</h2>
      <h2>User info: {JSON.stringify(user)}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleUpdateInfo}>Update Info</button>
    </div>
  );
}
