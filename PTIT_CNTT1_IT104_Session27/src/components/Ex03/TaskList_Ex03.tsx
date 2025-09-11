import { Card } from "antd";
import { Link } from "react-router-dom";

export interface Task {
  id: number;
  title: string;
  description: string;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Routes và useNavigate",
  },
  {
    id: 2,
    title: "Ôn lại Tailwind",
    description: "Thục hành tạo UI cơ bản bằng Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoàn thành BTVN",
    description: "Đẩy code lên GitHub và nộp link",
  },
];

export default function TaskList_Ex03() {
  return (
    <div className="mt-5 flex flex-col gap-5 items-center">
      <h1>Danh sách công việc</h1>
      <div>
        {tasks.map((task) => (
          <Card title={task.title} style={{ marginTop: 20, width: 300 }}>
            <p>{task.description}</p>
            <Link to={`/task-list-ex03/${task.id}`} className="text-blue-500">
              Xem chi tiết
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
