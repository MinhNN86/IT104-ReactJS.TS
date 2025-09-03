import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PTIT_CNTT1_IT104_Session22_Bai03() {
  return (
    <div className="d-flex gap-4">
      <Card style={{ width: "270px", padding: 0 }}>
        <Card.Img
          variant="top"
          src="https://laptoptld.com/wp-content/uploads/2022/11/20230518_152922.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold" style={{ fontSize: 24 }}>
            MacBook Air 2018
          </Card.Title>
          <Card.Text style={{ minHeight: 70 }}>
            The reason I am selling the machine is because it is too much power
            for what I need
          </Card.Text>
          <div className="d-flex gap-2 justify-content-center align-items-center mt-3">
            <Button variant="primary" style={{ minWidth: 130 }}>
              Xem chi tiết
            </Button>
            <div style={{ fontSize: 15 }}>30.000.000 đ</div>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "270px", padding: 0 }}>
        <Card.Img
          variant="top"
          src="https://laptopvang.com/wp-content/uploads/2021/08/macbook-pro-15.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="fw-bold" style={{ fontSize: 24 }}>
            MacBook Pro 2019
          </Card.Title>
          <Card.Text style={{ minHeight: 70 }}>
            The reason I am selling the machine is because it is too much power
            for what I need.
          </Card.Text>
          <div className="d-flex gap-2 justify-content-center align-items-center mt-3">
            <Button variant="primary" style={{ minWidth: 130 }}>
              Xem chi tiết
            </Button>
            <div style={{ fontSize: 15 }}>30.000.000 đ</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
