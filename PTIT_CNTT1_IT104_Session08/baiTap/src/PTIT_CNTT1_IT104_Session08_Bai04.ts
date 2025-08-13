const mergeObjects = <T, U>(obj1: T, obj2: U): T & U => ({ ...obj1, ...obj2 });

const person = { name: "Demo", age: 19 };
const job = { title: "dev", salary: 2000 };

const merge = mergeObjects(person, job);
console.log(merge);
