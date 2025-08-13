//! Hàm Generic cơ bản
function identity(value) {
    return value;
}
// Tự động ép kiểu
const result = identity("Demo");
// ép kiểu thủ công
const result1 = identity(3);
// Hàm Generic với 2 tham số
function pair(first, second) {
    return [first, second];
}
const resultPair = pair("Demo", 20);
// Hàm Generic xử lý với kiểu dữ liệu mảng
function checkElement(arr, conditionFn) {
    for (const item of arr) {
        if (conditionFn(item))
            return item;
    }
    return undefined;
}
const numbers = [1, 2, 3, 4, 5];
const firstEven = checkElement(numbers, (item) => item % 2 == 0);
//! Generic Class
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
}
const numberBox = new Box(123);
const stringBox = new Box("Demo");
// Sử dụng dữ liệu kiểu mảng
class DataStore {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const fruitStore = new DataStore();
fruitStore.addItem("banana");
fruitStore.addItem("apple");
const option1 = {
    value: 100,
    name: "Demo",
};
const productOption = {
    value: { id: 1, name: "Demo" },
    name: "Demo",
};
//! Constraint Generic
function getLength(item) {
    return item.length;
}
getLength("Demo");
function sayHello(person) {
    console.log(`Hello ${person.name}`);
}
sayHello({ name: "Demo", id: 3 }); // Hello Demo
const admin = (user) => {
    console.log("Create User", user);
};
admin({ id: 1 }); // Create User { id: 1 }
// 2. Readonly<T> – Làm cho thuộc tính không thể thay đổi
const user = {
    id: 1,
    name: "demo",
    email: "demo@gmail.com",
};
const userPick = {
    name: "Demo",
    email: "demo@gmail.com",
};
const userOmit = {
    id: 2,
    name: "Demo",
};
const myScore = {
    literature: 5,
    math: 7,
    english: 9,
};
const init = (cfg) => {
    console.log(cfg.debug, cfg.port);
};
init({ debug: false, port: 123 });
export {};
