import React, { Component } from "react";

type Task = {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
};

type StateTypes = {
  tasks: Task[];
};

export default class PTIT_CNTT1_IT104_Session13_Bai08 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      tasks: [
        {
          id: 1,
          name: "Thiết kế giao diện Header",
          assign: "Nguyễn Văn A",
          status: false,
          created_at: new Date(2024, 2, 21, 13, 12, 12),
        },
        {
          id: 1,
          name: "Thiết kế giao diện Footer",
          assign: "Nguyễn Văn B",
          status: true,
          created_at: new Date(2024, 2, 21, 15, 10, 50),
        },
      ],
    };
  }
  render() {
    const formatDate = (date: Date) => {
      const pad = (n: number) => n.toString().padStart(2, "0");
      const dd = pad(date.getDate());
      const mm = pad(date.getMonth() + 1);
      const yyyy = date.getFullYear();
      const hh = pad(date.getHours());
      const mi = pad(date.getMinutes());
      const ss = pad(date.getSeconds());
      return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
    };

    const renderStatus = (status: boolean) => {
      const base: React.CSSProperties = {
        padding: "4px 8px",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600,
        display: "inline-block",
      };
      return status ? (
        <span style={{ ...base, background: "#E7F6EC", color: "#1F9254" }}>
          Hoàn thành
        </span>
      ) : (
        <span style={{ ...base, background: "#FDEDED", color: "#B42318" }}>
          Chưa hoàn thành
        </span>
      );
    };

    return (
      <div>
        <table className="table" style={{ width: "60%", margin: 20 }}>
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên công việc</th>
              <th scope="col">Người thực hiện</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Thời gian tạo</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((task) => (
              <tr key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.name}</td>
                <td>{task.assign}</td>
                <td>{renderStatus(task.status)}</td>
                <td>{formatDate(task.created_at)}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-warning">Sửa</button>
                    <button className="btn btn-sm btn-danger">Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
