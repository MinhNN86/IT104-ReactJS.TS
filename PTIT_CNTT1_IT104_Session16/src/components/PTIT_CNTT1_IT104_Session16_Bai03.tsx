import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class PTIT_CNTT1_IT104_Session16_Bai03 extends Component {
  render() {
    return (
      <div className="p-4 bg-dark text-white min-vh-100">
        <p className="mb-3">Áp dụng Bootstrap để xây dựng các Button:</p>

        <div className="d-flex flex-wrap gap-2 bg-secondary p-3 rounded">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-light">Light</button>
          <button className="btn btn-dark">Dark</button>
        </div>
      </div>
    );
  }
}
