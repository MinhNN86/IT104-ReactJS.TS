function flatten(arr) {
    return arr.reduce((acc, cur) => [...acc, ...cur], []);
}
console.log(flatten([
    [1, 2],
    [3, 4],
    [5, 6],
]));
console.log(flatten([["apple", "banana"], ["cherry"], ["date", "elderberry"]]));
export {};
