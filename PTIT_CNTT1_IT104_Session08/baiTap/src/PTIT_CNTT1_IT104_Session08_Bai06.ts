function findElement<T>(arr: T[], value: T): T | undefined {
  return arr.find((item) => item === value);
}

const numbers = [10, 20, 30, 40];
const result1 = findElement(numbers, 30);
console.log(result1);

const result2 = findElement(numbers, 99);
console.log(result2);
