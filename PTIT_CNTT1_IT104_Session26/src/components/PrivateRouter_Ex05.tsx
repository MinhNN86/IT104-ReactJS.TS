import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter_Ex05() {
  const [isAuthenticated] = useState<boolean>(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/account-page" />;
}
