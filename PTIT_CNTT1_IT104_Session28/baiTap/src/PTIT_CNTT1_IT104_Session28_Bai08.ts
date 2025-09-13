type Callback<T> = (element: T, index: number, array: T[]) => void;

const myFilter = <T>(
  array: T[],
  searchValue: T,
  callback: Callback<T>
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue && array[i] !== undefined) {
      callback(array[i]!, i, array);
      result.push(array[i] as T);
    }
  }
  return result;
};

const callback = <T>(element: T, index: number, array: T[]) => {
  console.log(
    `Tìm thấy ${element} tại vị trí ${index} trong [${array.join(", ")}]`
  );
};

const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];
console.log(myFilter(numbers, 2, callback));
console.log(myFilter(numbers, 10, callback));
