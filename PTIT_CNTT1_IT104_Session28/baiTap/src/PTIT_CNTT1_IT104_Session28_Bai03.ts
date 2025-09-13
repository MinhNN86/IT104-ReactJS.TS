type Callback = (value: number) => void;

const processArray = (arr: number[], callback: Callback): void => {
  for (let i = 0; arr.length; i++) {
    setTimeout(() => {
      callback(i as number);
    }, (i + 1) * 1000);
  }
};

const callback = (value: number) => {
  console.log(`Phầm tử thứ ${value}`);
};

processArray([1, 2, 3, 4, 5], callback);
