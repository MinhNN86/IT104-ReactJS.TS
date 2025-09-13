const checkCondition = (condition, callback) => {
    setTimeout(() => {
        callback(condition);
    }, 1000);
};
const callback = (result) => {
    console.log(`Điều kiện trả về: ${result}`);
};
checkCondition(true, callback);
checkCondition(false, callback);
export {};
