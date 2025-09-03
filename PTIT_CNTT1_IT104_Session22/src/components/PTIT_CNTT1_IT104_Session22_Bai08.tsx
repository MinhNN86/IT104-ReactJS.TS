import { Button, Col, Form, Row } from "react-bootstrap";

export default function PTIT_CNTT1_IT104_Session22_Bai08() {
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <h2 className="text-center">Đăng ký tài khoản</h2>
        <Row>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Nhập email" />
          </Col>
          <Col>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Col>
        </Row>
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control type="text" placeholder="Ví dụ: Nguyễn Văn A" />
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control type="text" placeholder="Nhập email" />
        <Row>
          <Col>
            <Form.Label>Thành phố</Form.Label>
            <Form.Select>
              <option>Hà Nội</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Quận</Form.Label>
            <Form.Select>
              <option>Thanh Xuân</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Mã bưu điện</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button variant="primary" type="submit" style={{ width: 250 }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
