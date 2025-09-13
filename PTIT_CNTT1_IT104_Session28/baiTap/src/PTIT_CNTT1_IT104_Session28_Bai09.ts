// type Callback<T, U> = (element: T) => U;

// function myMap<T, U>(array: T[], callback: Callback<T, U>): U[] {
//   const result: U[] = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i] as T));
//   }
//   return result;
// }

// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// const newArr = myMap(numbers, (element) => {
//   return element * 2;
// });

// console.log(newArr);

type Callback<T, U> = (element: T) => U;

const myMap = <T, U>(array: T[], callback: Callback<T, U>): U[] => {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i] as T));
  }
  return result;
};

const callback = (element: number): number => {
  return element * 2;
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(myMap(numbers, callback));
