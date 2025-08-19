import React, { Component } from "react";
import "../../styles/PTIT_CNTT1_IT104_Session12_Bai10.css";

export default class PTIT_CNTT1_IT104_Session12_Bai10 extends Component {
  render() {
    interface Student {
      id: string;
      name: string;
      age: number;
      gender: string;
      dob?: string;
      birthplace?: string;
      address?: string;
    }

    const students: Student[] = [
      {
        id: "SV001",
        name: "Nguyễn Văn A",
        age: 20,
        gender: "Nam",
      },
      {
        id: "SV002",
        name: "Nguyễn Văn B",
        age: 21,
        gender: "Nữ",
      },
      {
        id: "SV003",
        name: "Nguyễn Văn C",
        age: 19,
        gender: "Nam",
      },
    ];

    const searchComponent = () => {
      return (
        <div className="header-left">
          <div className="add-student">
            <button>Thêm mới sinh viên</button>
            <input type="text" placeholder="Search Here" />
          </div>
          <div className="searchStudent">
            <button>Tìm kiếm</button>
            <input type="text" placeholder="Sắp xếp" />
          </div>
        </div>
      );
    };

    const listStudentComponent = () => {
      return (
        <div className="list-student">
          <div className="title-list">Danh sách sinh viên</div>
          <div className="table-info">
            <table>
              <thead>
                <tr>
                  <th style={{ width: 60 }}>#</th>
                  <th style={{ minWidth: 120 }}>Mã sinh viên</th>
                  <th style={{ minWidth: 180 }}>Tên sinh viên</th>
                  <th style={{ width: 80 }}>Tuổi</th>
                  <th style={{ width: 90 }}>Giới tính</th>
                  <th style={{ minWidth: 180 }}>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr key={s.id}>
                    <td>{index++}</td>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.gender}</td>
                    <td>
                      <button style={{ backgroundColor: "#F95F53" }}>
                        Xem
                      </button>
                      <button style={{ backgroundColor: "#FFAF20" }}>
                        Sửa
                      </button>
                      <button style={{ backgroundColor: "#34B1AA" }}>
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };

    const infoStudentComponent = () => {
      return (
        <React.Fragment>
          <div className="title">Thông Tin Sinh Viên</div>
          <div className="input-info">
            <div className="row-info">
              <div>Mã Sinh Viên</div>
              <input type="text" />
            </div>
            <div className="row-info">
              <div>Tên sinh viên</div>
              <input type="text" />
            </div>
            <div className="row-info">
              <div>Tuổi</div>
              <input type="number" />
            </div>
            <div className="row-info">
              <div>Giới tính</div>
              <input type="text" placeholder="Nam" />
            </div>
            <div className="row-info">
              <div>Ngày sinh</div>
              <input type="text" placeholder="dd/mm/yyyy" />
            </div>
            <div className="row-info">
              <div>Nơi sinh</div>
              <input type="text" placeholder="Hà Nội" />
            </div>
            <div className="row-info">
              <div>Địa chỉ</div>
              <textarea />
            </div>
          </div>
          <button className="submit">Submit</button>
        </React.Fragment>
      );
    };

    return (
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="left">
          {searchComponent()}
          {listStudentComponent()}
        </div>
        <div className="right">{infoStudentComponent()}</div>
      </div>
    );
  }
}
