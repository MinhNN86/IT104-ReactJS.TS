import React, { Component } from "react";

export default class PTIT_CNTT1_IT104_Session12_Bai01 extends Component {
  render() {
    const courses: string[] = ["HTML", "CSS", "JavaScript", "ReactJS"];
    return (
      <React.Fragment>
        <h1>Danh sách khoá học</h1>
        <div>
          {courses.map((course, index) => (
            <div key={index}>
              {index + 1}. {course}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
