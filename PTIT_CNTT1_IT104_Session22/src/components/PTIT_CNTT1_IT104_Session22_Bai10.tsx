import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Form,
  Pagination,
  InputGroup,
} from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import {
  Checkbox,
  Switch,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const users = [
  { name: "Jssa Jas", date: "09 Apr 2021" },
  { name: "Pauline Jas", date: "26 Jan 2021" },
  { name: "Sherilyn Metzel", date: "27 Jan 2021" },
  { name: "Haily Carthew", date: "27 Jan 2018" },
  { name: "Dorothea Joicey", date: "12 Dec 2017" },
  { name: "Mikaela Pinel", date: "10 Dec 2017" },
  { name: "Donnell Farries", date: "03 Dec 2017" },
  { name: "Letizia Puncher", date: "09 Dec 2017" },
];

export default function PTIT_CNTT1_IT104_Session22_Bai10() {
  const [status, setStatus] = useState("any");

  return (
    <Container fluid className=" min-vh-100 py-4">
      <Row>
        <Col md={2}>
          <Card className="" style={{ minWidth: 180 }}>
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "end",
                marginLeft: 40,
              }}
            >
              <ul className="list-unstyled mb-0">
                <li
                  className="mb-4 d-flex align-items-center text-primary"
                  style={{ fontWeight: 500, fontSize: 18 }}
                >
                  <span
                    className="material-icons me-3"
                    style={{ color: "#1877f2", fontSize: 28 }}
                  >
                    bar_chart
                  </span>
                  Overview
                </li>
                <li
                  className="mb-4 d-flex align-items-center text-primary"
                  style={{ fontWeight: 500, fontSize: 18 }}
                >
                  <span
                    className="material-icons me-3"
                    style={{ color: "#1877f2", fontSize: 28 }}
                  >
                    grid_on
                  </span>
                  CRUD
                </li>
                <li
                  className="d-flex align-items-center text-primary"
                  style={{ fontWeight: 500, fontSize: 18 }}
                >
                  <span
                    className="material-icons me-3"
                    style={{ color: "#1877f2", fontSize: 28 }}
                  >
                    settings
                  </span>
                  Settings
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Card>
            <Card.Header style={{ border: "none", background: "none" }}>
              <b>Users Details</b>
            </Card.Header>
            <Card.Body className="p-0">
              <Table bordered className="mb-0 align-middle">
                <thead>
                  <tr>
                    <th>
                      <Checkbox />
                    </th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th></th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, idx) => (
                    <tr key={idx}>
                      <td>
                        <Checkbox />
                      </td>
                      <td>
                        <span className="bg-light rounded p-1 d-inline-block">
                          <ImageIcon style={{ fontSize: 30, color: "#888" }} />
                        </span>
                      </td>
                      <td>{user.name}</td>
                      <td>{user.date}</td>
                      <td>
                        <Switch color="primary" />
                      </td>
                      <td>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="me-2"
                        >
                          <EditIcon fontSize="small" /> Edit
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer
              className="d-flex justify-content-center mt-5"
              style={{ border: "none", background: "none" }}
            >
              <Pagination>
                <Pagination.First />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Last />
              </Pagination>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <Button
                variant="success"
                className="w-100 mb-3"
                style={{ fontWeight: 500 }}
              >
                New User
              </Button>
              <div className="mb-2">
                <span
                  className="me-2"
                  style={{ color: "#1a73e8", cursor: "pointer" }}
                >
                  All/ <b>32</b>
                </span>
                <span
                  className="me-2"
                  style={{ color: "#1a73e8", cursor: "pointer" }}
                >
                  Active/ <b>16</b>
                </span>
              </div>
              <div
                className="mb-2"
                style={{ color: "#1a73e8", cursor: "pointer" }}
              >
                Selected/ 0
              </div>
              <Form.Label className="mt-3">Date from - to:</Form.Label>
              <Form.Control
                size="sm"
                disabled
                value="01 May 21 - 27 May 21"
                className="mb-3"
              />
              <Form.Label>Search by Name:</Form.Label>
              <Form.Control size="sm" placeholder="Name" className="mb-3" />
              <Form.Label>Status:</Form.Label>
              <RadioGroup
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mb-2"
              >
                <FormControlLabel
                  value="disabled"
                  control={<Radio size="small" />}
                  label="Disabled"
                />
                <FormControlLabel
                  value="active"
                  control={<Radio size="small" />}
                  label="Active"
                />
                <FormControlLabel
                  value="any"
                  control={<Radio size="small" />}
                  label="Any"
                />
              </RadioGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
