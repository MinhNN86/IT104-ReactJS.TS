import React from "react";

type PropTypes = {
  name?: string;
  age?: number;
};
export default function FunctionalComponent({ name, age }: PropTypes) {
  return (
    <div>
      <h1>Functional Component</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
