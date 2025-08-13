function findFirstEven(arr, conditionFn) {
    return arr.find((item) => item % 2 === 0 && conditionFn(item));
}
const numbers = [1, 3, 4, 7, 8, 10];
const result = findFirstEven(numbers, (num) => num > 5);
console.log(result);
const result2 = findFirstEven(numbers, (num) => num > 20);
console.log(result2);
export {};
