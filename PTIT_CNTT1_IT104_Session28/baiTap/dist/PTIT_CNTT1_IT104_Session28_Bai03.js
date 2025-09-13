const processArray = (arr, callback) => {
    for (let i = 0; arr.length; i++) {
        setTimeout(() => {
            callback(i);
        }, (i + 1) * 1000);
    }
};
const callback = (value) => {
    console.log(`Phầm tử thứ ${value}`);
};
processArray([1, 2, 3, 4, 5], callback);
export {};
