import React, { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function PTIT_CNTT1_IT104_Session18_Bai02() {
  const users: User[] = useMemo(
    () => [
      { id: 1, name: "Minh", age: 17 },
      { id: 2, name: "Lan", age: 20 },
      { id: 3, name: "Hùng", age: 25 },
      { id: 4, name: "Trang", age: 15 },
    ],
    []
  );

  const adultUser = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);
  return (
    <div>
      <h2>Danh sách người dùng trên 18</h2>
      <ul>
        {adultUser.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} tuổi)
          </li>
        ))}
      </ul>
    </div>
  );
}
