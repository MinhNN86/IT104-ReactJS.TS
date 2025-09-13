type TaskList = string[];
type Callback = (message: string) => void;

function addTask(
  taskName: string,
  taskList: TaskList,
  callback: Callback
): void {
  if (taskList.includes(taskName)) {
    console.log(`Lỗi: Công việc "${taskName}" đã tồn tại!`);
    return;
  }
  taskList.push(taskName);
  callback(`Đã thêm công việc "${taskName}" thành công!`);
}

function deleteTask(
  taskName: string,
  taskList: TaskList,
  callback: Callback
): void {
  const index = taskList.indexOf(taskName);
  if (index === -1) {
    console.log(`Lỗi: Không tìm thấy công việc "${taskName}" để xoá`);
    return;
  }
  taskList.splice(index, 1);
  callback(`Đã xoá công việc "${taskName}" thành công!`);
}

function displayTasks(taskList: TaskList): void {
  if (taskList.length === 0) {
    console.log("Danh sách công việc trống!");
  } else {
    console.log("Danh sách công việc hiện tại:");
    taskList.forEach((task, idx) => {
      console.log(`${idx + 1}. ${task}`);
    });
  }
}

const tasks: TaskList = ["Học bài", "Làm bài tập", "Dọn phòng"];

addTask("Đi chợ", tasks, (msg) => console.log(msg));
addTask("Học bài", tasks, (msg) => console.log(msg));
displayTasks(tasks);

deleteTask("Dọn phòng", tasks, (msg) => console.log(msg));
deleteTask("Ngủ", tasks, (msg) => console.log(msg));
displayTasks(tasks);
