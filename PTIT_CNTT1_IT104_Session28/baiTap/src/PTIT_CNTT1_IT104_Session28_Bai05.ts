type Callback = (result: boolean) => void;

const checkCondition = (condition: boolean, callback: Callback): void => {
  setTimeout(() => {
    callback(condition);
  }, 1000);
};

const callback = (result: boolean): void => {
  console.log(`Điều kiện trả về: ${result}`);
};

checkCondition(true, callback);
checkCondition(false, callback);
