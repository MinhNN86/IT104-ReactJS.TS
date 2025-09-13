const myForEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            callback(i, array[i], array);
        }
    }
};
const logItem = (index, element, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: ${array}`);
};
const numbers = [1, 2, 3, 4, 5, 6];
myForEach(numbers, logItem);
export {};
