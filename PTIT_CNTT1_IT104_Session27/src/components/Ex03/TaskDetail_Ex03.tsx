import { Button, Card } from "antd";
import type { Task } from "./TaskList_Ex03";
import { tasks } from "./TaskList_Ex03";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskDetail_Ex03() {
  const navigate = useNavigate();
  const { idTask } = useParams();
  const task: Task | undefined = tasks.find((t) => t.id === Number(idTask));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {task ? (
        <Card title={task.title} style={{ width: 400 }}>
          <p>{task.description}</p>
          <Button
            color="primary"
            variant="solid"
            onClick={() => navigate("/task-list-ex03")}
            className="mt-3"
          >
            Quay lại
          </Button>
        </Card>
      ) : (
        <Card title="Không có dữ liệu công việc" style={{ width: 300 }}>
          <Button
            color="default"
            variant="solid"
            onClick={() => navigate("/task-list-ex03")}
          >
            Quay lại
          </Button>
        </Card>
      )}
    </div>
  );
}
