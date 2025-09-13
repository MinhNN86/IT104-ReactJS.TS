const displayNumbers = (callback, delay) => {
    let num = 1;
    const printNext = () => {
        callback(num);
        num++;
        setTimeout(printNext, delay);
    };
    printNext();
};
const callback = (value) => {
    console.log(`Số thứ tự: ${value}`);
};
displayNumbers(callback, 1000);
export {};
