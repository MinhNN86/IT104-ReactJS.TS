// type Callback<T, U> = (element: T) => U;
const myMap = (array, callback) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
};
const callback = (element) => {
    return element * 2;
};
const numbers = [1, 2, 3, 4, 5, 6];
console.log(myMap(numbers, callback));
export {};
