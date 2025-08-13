function partialUpdate<T>(obj: T, update: Partial<T>): T {
  return { ...obj, ...update };
}

console.log(
  partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { age: 31 })
);
console.log(
  partialUpdate(
    { name: "Alice", age: 30, job: "Developer" },
    { name: "Bob", job: "Designer" }
  )
);
