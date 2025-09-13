type Callback = (value: number) => void;

const displayNumbers = (callback: Callback, delay: number): void => {
  let num = 1;
  const printNext = () => {
    callback(num);
    num++;
    setTimeout(printNext, delay);
  };
  printNext();
};

const callback = (value: number) => {
  console.log(`Số thứ tự: ${value}`);
};

displayNumbers(callback, 1000);
