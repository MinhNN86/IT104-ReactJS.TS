const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const runTask = async () => {
  console.log("Run task 1");
  await delay(1000);
  console.log("Task 1 done");

  console.log("Run task 2");
  await delay(2000);
  console.log("Task 2 done");

  console.log("Run task 3");
  await delay(1500);
  console.log("Task 3 done");
};

// runTask();

const parallelTasks = () => {
  const taskA = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task A done");
      resolve("Task A");
    }, 1000);
  });
  const taskB = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task B done");
      resolve("Task B");
    }, 1500);
  });

  Promise.all([taskA, taskB]).then(() => {
    console.log("All parallel tasks done!");
  });
};

// parallelTasks();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const result = Math.random() > 0.5;
    setTimeout(() => {
      if (result) {
        resolve({ data: "Success" });
      } else {
        reject("Network Error");
      }
    }, Math.ceil(Math.random() * 1000));
  });
};

const handleData = async () => {
  try {
    const result = await fetchData();
    console.log("Result: ", result);
  } catch (error) {
    console.error("Error: ", error);
  }
};

handleData();
