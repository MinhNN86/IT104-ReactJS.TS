const myFilter = (array, searchValue, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchValue && array[i] !== undefined) {
            callback(array[i], i, array);
            result.push(array[i]);
        }
    }
    return result;
};
const callback = (element, index, array) => {
    console.log(`Tìm thấy ${element} tại vị trí ${index} trong [${array.join(", ")}]`);
};
const numbers = [1, 2, 2, 3, 4, 5, 6];
console.log(myFilter(numbers, 2, callback));
console.log(myFilter(numbers, 10, callback));
export {};
