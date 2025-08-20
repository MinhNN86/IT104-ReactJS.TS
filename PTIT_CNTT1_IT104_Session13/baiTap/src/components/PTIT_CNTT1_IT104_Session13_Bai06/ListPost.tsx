import React, { Component } from "react";
import DetailPost from "./DetailPost";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type StateTypes = {
  posts: Post[];
};

export default class ListPost extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content:
            "Props giúp truyền dữ liệu từ component con xuống component cha",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content:
            "State giúp lưu trữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
  }
  render() {
    return <DetailPost posts={this.state.posts} />;
  }
}
