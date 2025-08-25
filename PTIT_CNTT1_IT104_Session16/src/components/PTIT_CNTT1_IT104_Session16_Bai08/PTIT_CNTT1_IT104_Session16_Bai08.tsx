import React, { Component } from "react";
import { products } from "./product.data";
import type { Product } from "./product.data";
import "bootstrap/dist/css/bootstrap.min.css";

type Cart = {
  id: number;
  quantity: number;
};

type StateTypes = {
  openCart: boolean;
  listCart: Cart[];
};
export default class PTIT_CNTT1_IT104_Session16_Bai08 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      openCart: false,
      listCart: [],
    };
  }
  componentDidMount(): void {
    const listCart: Cart[] = JSON.parse(
      localStorage.getItem("cartData") || "[]"
    );
    this.setState({
      listCart: listCart,
    });
  }
  render() {
    const handleAddCart = (id: number) => {
      const cartItem = this.state.listCart.find((cart) => cart.id === id);
      const product = products.find((p) => p.id === id);
      if (!product) return;

      if (!cartItem) {
        const newCart: Cart = { id: id, quantity: 1 };
        const newListCart = [...this.state.listCart, newCart];
        localStorage.setItem("cartData", JSON.stringify(newListCart));
        this.setState({ listCart: newListCart });
      } else {
        if (cartItem.quantity + 1 > product.stock) {
          alert("Số lượng sản phẩm trong kho không đủ ");
          return;
        }
        const newListCart = this.state.listCart.map((cart) =>
          cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
        );
        localStorage.setItem("cartData", JSON.stringify(newListCart));
        this.setState({ listCart: newListCart });
      }
    };

    const handleOpen = () => {
      this.setState({
        openCart: !this.state.openCart,
      });
    };

    const total = this.state.listCart.reduce((sum, cart) => {
      const product = products.find((p) => p.id === cart.id);
      if (!product) return sum;
      return sum + product.price * cart.quantity;
    }, 0);

    const removeCart = (id: number) => {
      const cardItem = this.state.listCart.find((cart) => cart.id === id);
      if (!cardItem) return;

      const updateListCart = this.state.listCart.filter(
        (cart) => cart.id !== id
      );
      localStorage.setItem("cartData", JSON.stringify(updateListCart));
      this.setState({
        listCart: updateListCart,
      });
    };

    const increaseCart = (id: number) => {
      const cardItem = this.state.listCart.find((cart) => cart.id === id);
      const product = products.find((product) => product.id === id);
      if (!cardItem || !product) return;

      if (cardItem.quantity + 1 > product.stock) {
        alert("Số lượng sảm phẩm trong kho không đủ");
        return;
      }
      const updateListCart = this.state.listCart.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
      );
      localStorage.setItem("cartData", JSON.stringify(updateListCart));
      this.setState({
        listCart: updateListCart,
      });
    };

    const decreaseCart = (id: number) => {
      const cardItem = this.state.listCart.find((cart) => cart.id === id);
      const product = products.find((product) => product.id === id);
      if (!cardItem || !product) return;

      if (cardItem.quantity - 1 === 0) {
        removeCart(id);
        return;
      }
      const updateListCart = this.state.listCart.map((cart) =>
        cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : cart
      );
      localStorage.setItem("cartData", JSON.stringify(updateListCart));
      this.setState({
        listCart: updateListCart,
      });
    };

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

              <div
                className="ms-auto d-flex align-items-center gap-2"
                onClick={handleOpen}
                style={{ cursor: "pointer" }}
              >
                <span className="position-relative">
                  <span className="fw-bold">🛒</span>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: 12 }}
                  >
                    {this.state.listCart.length}
                  </span>
                </span>
              </div>
            </div>
          </nav>

          <div
            className={`container position-relative ${
              this.state.openCart ? "" : "d-none"
            }`}
          >
            <div
              className="position-absolute end-0 mt-3"
              style={{ zIndex: 10, width: 420 }}
            >
              <div className="card text-white" style={{ background: "#000" }}>
                <div className="card-body">
                  <h4 className="mb-3">Cart</h4>
                  <hr className="border-secondary" />

                  {this.state.listCart.map((cart) => {
                    const product = products.find((p) => p.id === cart.id);
                    if (!product) return null;
                    return (
                      <div
                        className="d-flex align-items-center gap-3 mb-3"
                        key={cart.id}
                      >
                        <img
                          src={product.image}
                          className="rounded-circle"
                          width={50}
                          height={50}
                        />
                        <div className="flex-grow-1">
                          <div className="fw-semibold">{product.name}</div>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            className="btn btn-outline-light btn-sm"
                            onClick={() => increaseCart(cart.id)}
                          >
                            +
                          </button>
                          <span>{cart.quantity}</span>
                          <button
                            className="btn btn-outline-light btn-sm"
                            onClick={() => decreaseCart(cart.id)}
                          >
                            -
                          </button>
                          <button
                            className="btn btn-outline-light btn-sm"
                            onClick={() => removeCart(cart.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  <hr className="border-secondary" />
                  <div className="d-flex justify-content-between">
                    <span className="fw-semibold">Tổng tiền:</span>
                    <span className="fw-bold">
                      {total.toLocaleString("vi-VN")} đ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-4">
            <div className="row g-4">
              {products.map((product) => (
                <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.image}
                      className="card-img-top"
                      style={{ height: 180, objectFit: "contain" }}
                    />
                    <div className="card-body text-center">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="text-muted mb-3">
                        {product.price.toLocaleString("vi-VN")}{" "}
                        <span style={{ textDecoration: "underline" }}>đ</span>
                      </p>
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => handleAddCart(product.id)}
                      >
                        🛒 Thêm vào giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
