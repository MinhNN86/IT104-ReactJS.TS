//! Hàm Generic cơ bản
function identity<T>(value: T): T {
  return value;
}
// Tự động ép kiểu
const result = identity("Demo");
// ép kiểu thủ công
const result1 = identity<number>(3);

// Hàm Generic với 2 tham số
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const resultPair = pair<string, number>("Demo", 20);

// Hàm Generic xử lý với kiểu dữ liệu mảng
function checkElement<T>(
  arr: T[],
  conditionFn: (item: T) => boolean
): T | undefined {
  for (const item of arr) {
    if (conditionFn(item)) return item;
  }
  return undefined;
}

const numbers = [1, 2, 3, 4, 5];
const firstEven = checkElement(numbers, (item) => item % 2 == 0);

//! Generic Class
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Demo");

// Sử dụng dữ liệu kiểu mảng
class DataStore<T> {
  private items: T[] = [];
  addItem(item: T): void {
    this.items.push(item);
  }
  getAll(): T[] {
    return this.items;
  }
}

const fruitStore = new DataStore<string>();
fruitStore.addItem("banana");
fruitStore.addItem("apple");

//! Generic Interface
interface Option<T> {
  value: T;
  name: string;
}

const option1: Option<number> = {
  value: 100,
  name: "Demo",
};

interface Product {
  id: number;
  name: string;
}

const productOption: Option<Product> = {
  value: { id: 1, name: "Demo" },
  name: "Demo",
};

//! Constraint Generic
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("Demo");

// sử dụng với interface
interface HasName {
  name: string;
}

function sayHello<T extends HasName>(person: T): void {
  console.log(`Hello ${person.name}`);
}

sayHello({ name: "Demo", id: 3 }); // Hello Demo

// Generic Built-in
// 1. Partial<T> – Biến mọi thuộc tính của T thành tùy chọn
interface User {
  id: number;
  name: string;
  email: string;
}
const admin = (user: Partial<User>) => {
  console.log("Create User", user);
};
admin({ id: 1 }); // Create User { id: 1 }
// 2. Readonly<T> – Làm cho thuộc tính không thể thay đổi
const user: Readonly<User> = {
  id: 1,
  name: "demo",
  email: "demo@gmail.com",
};
// 3. Pick<T, K> – Lấy một phần các thuộc tính
type userReview = Pick<User, "name" | "email">;
const userPick: userReview = {
  name: "Demo",
  email: "demo@gmail.com",
};
// 4. Omit<T, K> – Bỏ đi một số thuộc tính
type userEmail = Omit<User, "email">;
const userOmit: userEmail = {
  id: 2,
  name: "Demo",
};
// 5. Exclude<Union, Remove> – Loại bỏ phần tử union type
type Role = "admin" | "user" | "customer";
type safeRole = Exclude<Role, "admin">;

// 6. Record<K, T> – Tạo object với key động và value có kiểu
type Score = Record<"literature" | "math" | "english", number>;
const myScore: Score = {
  literature: 5,
  math: 7,
  english: 9,
};
// 7. Required<T> – Biến mọi thuộc tính thành bắt buộc
interface Config {
  debug?: boolean;
  port?: number;
}

const init = (cfg: Required<Config>) => {
  console.log(cfg.debug, cfg.port);
};

init({ debug: false, port: 123 });
