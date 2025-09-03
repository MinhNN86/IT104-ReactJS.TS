import Dropdown from "react-bootstrap/Dropdown";

export default function PTIT_CNTT1_IT104_Session22_Bai04() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          className="border"
          variant="default"
          id="dropdown-basic"
        >
          Nguyễn Văn Nam
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
