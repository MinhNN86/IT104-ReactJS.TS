function partialUpdate(obj, update) {
    return { ...obj, ...update };
}
console.log(partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { age: 31 }));
console.log(partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { name: "Bob", job: "Designer" }));
export {};
