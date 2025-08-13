function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
