import { Button, Table } from "react-bootstrap";

interface User {
  id: number;
  name: string;
  gender: string;
  dob: string;
  email: string;
  address: string;
}

export default function PTIT_CNTT1_IT104_Session22_Bai09() {
  const dataUsers: User[] = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      gender: "Nam",
      dob: "01/01/1990",
      email: "nguyenvana@example.com",
      address: "Hà Nội",
    },
    {
      id: 2,
      name: "Trần Thị B",
      gender: "Nữ",
      dob: "02/02/1995",
      email: "tranthib@example.com",
      address: "TP. Hồ Chí Minh",
    },
    {
      id: 3,
      name: "Phạm Văn C",
      gender: "Nam",
      dob: "03/03/1992",
      email: "phamvanc@example.com",
      address: "Đà Nẵng",
    },
    {
      id: 4,
      name: "Lê Thị D",
      gender: "Nữ",
      dob: "04/04/1993",
      email: "lethid@example.com",
      address: "Hải Phòng",
    },
    {
      id: 5,
      name: "Nguyễn Văn E",
      gender: "Nam",
      dob: "05/05/1991",
      email: "nguyenvane@example.com",
      address: "Cần Thơ",
    },
  ];
  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th style={{ width: "120px" }}>STT</th>
            <th style={{ width: "200px" }}>Họ và tên</th>
            <th style={{ width: "120px" }}>Giới tính</th>
            <th style={{ width: "150px" }}>Ngày sinh</th>
            <th style={{ width: "250px" }}>Email</th>
            <th style={{ width: "200px" }}>Địa chỉ</th>
            <th style={{ width: "200px" }}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((user: User) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Button className="me-2" variant="warning">
                  Sửa
                </Button>
                <Button variant="danger">Xoá</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
