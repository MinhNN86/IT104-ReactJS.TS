const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const person = { name: "Demo", age: 19 };
const job = { title: "dev", salary: 2000 };
const merge = mergeObjects(person, job);
console.log(merge);
export {};
