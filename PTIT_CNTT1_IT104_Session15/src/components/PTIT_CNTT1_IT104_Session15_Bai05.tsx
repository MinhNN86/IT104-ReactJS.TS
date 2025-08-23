import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default class PTIT_CNTT1_IT104_Session15_Bai05 extends Component {
  renderHeader() {
    return (
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="page-title m-0">Quản lý sinh viên</h2>
        <button className="btn btn-primary btn-lg">
          <i className="bi bi-plus-lg me-1"></i> Thêm mới sinh viên
        </button>
      </div>
    );
  }

  renderToolbar() {
    return (
      <div className="toolbar d-flex flex-wrap gap-3 mb-3">
        <select className="form-select">
          <option>Sắp xếp theo tuổi</option>
          <option>Tuổi tăng dần</option>
          <option>Tuổi giảm dần</option>
          <option>Tên A → Z</option>
          <option>Tên Z → A</option>
        </select>
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-search" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm từ khóa theo tên hoặc email"
          />
        </div>
      </div>
    );
  }

  renderTable() {
    return (
      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>STT</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th className="text-center">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>SV001</td>
              <td>Nguyễn Văn A</td>
              <td>21/12/2023</td>
              <td>nva@gmail.com</td>
              <td>
                <span className="badge-soft success">Đang hoạt động</span>
              </td>
              <td className="text-center">
                <div className="d-inline-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm btn-chip">
                    Chặn
                  </button>
                  <button className="btn btn-outline-warning btn-sm btn-chip">
                    Sửa
                  </button>
                  <button className="btn btn-outline-danger btn-sm btn-chip">
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>SV002</td>
              <td>Nguyễn Thị B</td>
              <td>21/11/2022</td>
              <td>ntb@gmail.com</td>
              <td>
                <span className="badge-soft danger">Ngừng hoạt động</span>
              </td>
              <td className="text-center">
                <div className="d-inline-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm btn-chip">
                    Chặn
                  </button>
                  <button className="btn btn-outline-warning btn-sm btn-chip">
                    Sửa
                  </button>
                  <button className="btn btn-outline-danger btn-sm btn-chip">
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div className="container py-4">
        <style>{`
          .page-title{font-weight:700}
          .toolbar .form-select, .toolbar .form-control{max-width:280px}
          .badge-soft{border:1px solid transparent;font-weight:500;padding:.5rem .75rem;border-radius:5px}
          .badge-soft.success{background:#e9f7ef;color:#1e7e34;border-color:#b7ebc6}
          .badge-soft.danger{background:#fdecea;color:#b02a37;border-color:#ffb3ae}
          .btn-chip{border-radius:5px}
        `}</style>
        {this.renderHeader()}
        {this.renderToolbar()}
        {this.renderTable()}
      </div>
    );
  }
}
