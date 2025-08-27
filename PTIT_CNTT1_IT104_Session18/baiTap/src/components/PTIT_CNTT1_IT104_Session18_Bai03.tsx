import React, { useCallback, useState } from "react";

export default function PTIT_CNTT1_IT104_Session18_Bai03() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({
        email,
        password,
      });
    },
    [email, password]
  );
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <div>Password</div>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
