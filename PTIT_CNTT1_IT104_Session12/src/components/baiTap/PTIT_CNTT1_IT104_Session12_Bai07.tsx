import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai07 extends Component {
  renderHeader() {
    return (
      <div
        style={{ background: "#cfd8dc", padding: "10px", textAlign: "center" }}
      >
        Header
      </div>
    );
  }

  renderNavbar() {
    return (
      <div
        style={{ background: "#90a4ae", padding: "10px", textAlign: "center" }}
      >
        Navigation
      </div>
    );
  }

  renderMenu() {
    return (
      <div
        style={{
          background: "#1baf4f",
          color: "#fff",
          padding: "10px",
          width: "200px",
          minHeight: "100%",
          textAlign: "center",
        }}
      >
        Menu
      </div>
    );
  }

  renderArticle() {
    return (
      <div
        style={{
          background: "#90caf9",
          padding: "10px",
          width: "200px",
          minHeight: "100%",
          textAlign: "center",
        }}
      >
        Article
      </div>
    );
  }

  renderCart(key: number) {
    return (
      <div
        key={key}
        style={{
          background: "#fff",
          border: "1px solid #eee",
          width: "120px",
          height: "80px",
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        Cart
      </div>
    );
  }

  renderMain() {
    const carts = [];
    for (let i = 0; i < 16; i++) {
      carts.push(this.renderCart(i));
    }

    return (
      <div
        style={{
          background: "#fceaea",
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "10px",
          minHeight: "100%",
        }}
      >
        {carts}
      </div>
    );
  }

  render() {
    return (
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        {this.renderHeader()}
        {this.renderNavbar()}
        <div style={{ display: "flex", flex: 1 }}>
          {this.renderMenu()}
          {this.renderMain()}
          {this.renderArticle()}
        </div>
      </div>
    );
  }
}
