import { Alert } from "react-bootstrap";

export default function PTIT_CNTT1_IT104_Session22_Bai05() {
  return (
    <div>
      <Alert
        variant="success"
        dismissible
        style={{ width: 500, display: "flex", justifyContent: "space-between" }}
      >
        <div>Thêm tài khoản thành công</div>
      </Alert>
      <Alert
        variant="danger"
        dismissible
        style={{ width: 500, display: "flex", justifyContent: "space-between" }}
      >
        <div>Thêm mới tài khoản thất bại</div>
      </Alert>
      <Alert
        variant="warning"
        dismissible
        style={{ width: 500, display: "flex", justifyContent: "space-between" }}
      >
        <div>Tên không được để trống</div>
      </Alert>
    </div>
  );
}
