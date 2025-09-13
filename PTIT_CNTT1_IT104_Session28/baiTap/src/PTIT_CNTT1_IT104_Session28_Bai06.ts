type Callback = () => void;

const task1 = (next: Callback): void => {
  setTimeout(() => {
    console.log("Task 1 được thực thi");
    next();
  }, 1000);
};

const task2 = (next: Callback): void => {
  setTimeout(() => {
    console.log("Task 2 được thực thi");
    next();
  }, 1500);
};

const task3 = (): void => {
  setTimeout(() => {
    console.log("Task 3 được thực thi! Hoàn thành");
  }, 2000);
};

task1(() => {
  task2(() => {
    task3();
  });
});
