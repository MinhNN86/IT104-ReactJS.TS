function flatten<T>(arr: T[][]): T[] {
  return arr.reduce<T[]>((acc, cur) => [...acc, ...cur], []);
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log(flatten([["apple", "banana"], ["cherry"], ["date", "elderberry"]]));
