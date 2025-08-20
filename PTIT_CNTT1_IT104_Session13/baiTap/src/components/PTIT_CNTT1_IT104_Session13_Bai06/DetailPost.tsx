import React, { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type PropTypes = {
  posts: Post[];
};

export default class DetailPost extends Component<PropTypes> {
  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.props.posts.map((post) => (
          <div>
            <div>ID: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.content}</div>
            <div>Author: {post.author}</div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
