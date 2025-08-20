import React, { Component } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

type StateTypes = {
  users: User[];
};

export default class PTIT_CNTT1_IT104_Session13_Bai03 extends Component<
  object,
  StateTypes
> {
  constructor(props: object) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Mary", age: 25 },
        { id: 3, name: "Jane", age: 20 },
      ],
    };
  }
  render() {
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
