type Callback<T> = (index: number, element: T, array: T[]) => void;

const myForEach = <T>(array: Array<T>, callback: Callback<T>) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      callback(i, array[i] as T, array);
    }
  }
};

const logItem = <T>(index: number, element: T, array: T[]): void => {
  console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: ${array}`);
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];
myForEach(numbers, logItem);
