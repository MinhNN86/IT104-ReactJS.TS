import React, { Component } from "react";
import "mdb-ui-kit/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class PTIT_CNTT1_IT104_Session12_Bai09 extends Component {
  render() {
    return (
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: "40px" }}>
                    Quản lý công việc
                  </h3>

                  {/* Form thêm công việc */}
                  <form className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">
                      <input type="text" id="form2" className="form-control" />
                      <label className="form-label" htmlFor="form2">
                        Thêm công việc
                      </label>
                    </div>
                    <button type="submit" className="btn btn-info ms-2">
                      Thêm
                    </button>
                  </form>

                  {/* Tabs navs */}
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>

                  {/* Danh sách công việc */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {/* Công việc đã hoàn thành */}
                        <li
                          className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                          style={{ backgroundColor: "#f4f6f7" }}
                        >
                          <div>
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultChecked
                            />
                            <s>Cras justo odio</s>
                          </div>
                          <div>
                            <a
                              href="#!"
                              className="text-info"
                              title="Sửa công việc"
                            >
                              <i className="fas fa-pencil-alt me-3"></i>
                            </a>
                            <a
                              href="#!"
                              className="text-danger"
                              title="Xóa công việc"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>

                        {/* Công việc chưa hoàn thành */}
                        <li
                          className="list-group-item d-flex align-items-center border-0 mb-2 justify-content-between"
                          style={{ backgroundColor: "#f4f6f7" }}
                        >
                          <div>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            Cras justo odio
                          </div>
                          <div>
                            <a
                              href="#!"
                              className="text-info"
                              title="Sửa công việc"
                            >
                              <i className="fas fa-pencil-alt me-3"></i>
                            </a>
                            <a
                              href="#!"
                              className="text-danger"
                              title="Xóa công việc"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
