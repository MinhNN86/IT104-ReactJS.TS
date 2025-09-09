import { useParams } from "react-router-dom";

export default function Student_Ex02() {
  const { name } = useParams();
  return (
    <div>
      <h1>Student</h1>
      <h2>Name: {name}</h2>
    </div>
  );
}
