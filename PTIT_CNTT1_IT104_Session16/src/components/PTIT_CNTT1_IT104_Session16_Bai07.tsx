import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class PTIT_CNTT1_IT104_Session16_Bai07 extends Component {
  render() {
    return (
      <div>
        <div className="bg-light min-vh-100">
          <nav
            className="navbar navbar-expand-lg"
            style={{ background: "#f78a2f" }}
          >
            <div className="container">
              <a className="navbar-brand fw-semibold" href="#">
                Trang chủ
              </a>
              <a className="nav-link text-dark" href="#">
                Danh sách sản phẩm
              </a>

              <div className="ms-auto d-flex align-items-center gap-2">
                <span className="position-relative">
                  <span className="fw-bold">🛒</span>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: 12 }}
                  >
                    3
                  </span>
                </span>
              </div>
            </div>
          </nav>

          <div className="container position-relative">
            <div
              className="position-absolute end-0 mt-3"
              style={{ zIndex: 10, width: 420 }}
            >
              <div className="card text-white" style={{ background: "#000" }}>
                <div className="card-body">
                  <h4 className="mb-3">Cart</h4>
                  <hr className="border-secondary" />

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/333347/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg"
                      className="rounded-circle"
                      width={50}
                      height={50}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">
                        Điện thoại Samsung Galaxy
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-outline-light btn-sm">
                        +
                      </button>
                      <span>1</span>
                      <button className="btn btn-outline-light btn-sm">
                        -
                      </button>
                      <button className="btn btn-outline-light btn-sm">
                        🗑️
                      </button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img
                      src="https://galaxydidong.vn/wp-content/uploads/2022/09/iPhone-14-Pro-Max-Purple-galaxydidong.png"
                      className="rounded-circle"
                      width={50}
                      height={50}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">
                        Điện thoại Iphone14 Promax
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-outline-light btn-sm">
                        +
                      </button>
                      <span>1</span>
                      <button className="btn btn-outline-light btn-sm">
                        -
                      </button>
                      <button className="btn btn-outline-light btn-sm">
                        🗑️
                      </button>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="https://cdn.tgdd.vn/Products/Images/42/333347/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg"
                      className="rounded-circle"
                      width={50}
                      height={50}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">
                        Điện thoại Samsung Galaxy
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-outline-light btn-sm">
                        +
                      </button>
                      <span>1</span>
                      <button className="btn btn-outline-light btn-sm">
                        -
                      </button>
                      <button className="btn btn-outline-light btn-sm">
                        🗑️
                      </button>
                    </div>
                  </div>

                  <hr className="border-secondary" />
                  <div className="d-flex justify-content-between">
                    <span className="fw-semibold">Tổng tiền:</span>
                    <span className="fw-bold">61.500.000 đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-4">
            <div className="row g-4">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://cdn.tgdd.vn/Products/Images/42/333347/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Samsung Galaxy</h6>
                    <p className="text-muted mb-3">20.000.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://galaxydidong.vn/wp-content/uploads/2022/09/iPhone-14-Pro-Max-Purple-galaxydidong.png"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Iphone14 Promax</h6>
                    <p className="text-muted mb-3">20.500.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s24-fe_3__4.png"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Samsung Galaxy</h6>
                    <p className="text-muted mb-3">21.000.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Iphone11 Promax</h6>
                    <p className="text-muted mb-3">21.500.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://cdn.tgdd.vn/Products/Images/42/333347/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Samsung Galaxy</h6>
                    <p className="text-muted mb-3">22.000.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://cdn.tgdd.vn/Products/Images/42/333347/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Samsung Galaxy</h6>
                    <p className="text-muted mb-3">22.500.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/9/a9-trang.jpg"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Oppo A9</h6>
                    <p className="text-muted mb-3">23.000.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src="https://cdn.tgdd.vn/Products/Images/42/233460/oppo-reno5-5g-thumb-600x600.jpg"
                    className="card-img-top"
                    style={{ height: 180, objectFit: "contain" }}
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title">Điện thoại Oppo V5</h6>
                    <p className="text-muted mb-3">23.500.000 đ</p>
                    <button className="btn btn-primary w-100">
                      🛒 Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
