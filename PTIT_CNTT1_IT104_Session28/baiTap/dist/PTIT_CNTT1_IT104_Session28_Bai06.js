const task1 = (next) => {
    setTimeout(() => {
        console.log("Task 1 được thực thi");
        next();
    }, 1000);
};
const task2 = (next) => {
    setTimeout(() => {
        console.log("Task 2 được thực thi");
        next();
    }, 1500);
};
const task3 = () => {
    setTimeout(() => {
        console.log("Task 3 được thực thi! Hoàn thành");
    }, 2000);
};
task1(() => {
    task2(() => {
        task3();
    });
});
export {};
