import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function PTIT_CNTT1_IT104_Session20_Bai01() {
  const [input, setInput] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 5) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div>
      <h1>Kiểm tra độ dài chuỗi nhập vào</h1>
      <input type="text" onChange={handleChange} value={input} />
      {showError && (
        <div className="alert alert-danger mt-4" role="alert">
          Chuỗi nhập vào dài hơn 5 ký tự!
        </div>
      )}
    </div>
  );
}
