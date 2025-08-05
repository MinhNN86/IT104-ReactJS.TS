function removeDuplicates(input: string): string {
  return input
    .split("")
    .filter((char, index, arr) => arr.indexOf(char) === index)
    .join("");
}

console.log(removeDuplicates("banana"));
console.log(removeDuplicates("hello world"));
