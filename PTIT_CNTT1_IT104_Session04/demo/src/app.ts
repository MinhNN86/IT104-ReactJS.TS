//! Array
//Cách 1: Array
let numbers: number[] = [1, 2, 3, 4];
let seasons: string[] = ["Mua xuan", "Mua ha"];
//Cách 2: Array<kieuDuLieu>
let numbers1: Array<number> = [1, 2, 3, 4];
// Mảng hai chiều
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
// Mảng với readonly: Không thêm sửa xoá được
const readonlyNumber: readonly number[] = [1, 2, 3];

//! Object (key: value)
// Cách 1:
let person: { name: string; age: number } = {
  name: "Demo",
  age: 18,
};

// 2. Dùng interface hoặc type để tái sử dụng
interface Person {
  name: string;
  age: number;
}
let student: Person = {
  name: "Demo1",
  age: 19,
};

type Product = {
  id: number;
  name: string;
  price: number;
};
let item: Product = {
  id: 1,
  name: "Demoo",
  price: 1000,
};

// Thao tác CRUD
// Read
console.log(item);
console.log(item.name);

// Create
interface Person2 {
  id: number;
  name?: string; // Không rằng buộc
  [key: string]: any;
}

let person2: Person2 = {
  id: 1,
  name: "MinhNN",
};

person2.age = 18;
person2.phone = "0987654321";
console.log(person2);

// Update
person2.name = "minhnguyennhat";
console.log(person2);

// Delete: Chỉ xoá được dữ liệu thêm vào hoặc không rằng buộc
delete person2.age;
delete person2.name;
console.log(person2);

//! UNION: nhiều kiểu dữ liệu ở 1 biến
let value: number | string;
let value2: (number | string)[];

type Status = "loading" | "success" | "error";
const showStatus = (status: Status) => {
  if (status === "loading") {
    console.log("Đang tải trang");
  } else if (status === "success") {
    console.log("Tải trang thành công");
  } else {
    console.log("Lỗi tải trang");
  }
};

showStatus("loading");

//! Type Alias: gán tên bất kỳ thành kiểu dữ liệu
type ID = number;
let userId: ID = 1;
console.log(userId);

// Interface(Chủ yếu dùng cho Object)

//! Intersection Type (&)
// kết hợp bới nhau
type A = {
  name: string;
};
type B = {
  age: number;
};

type C = A & B;
let user: C = {
  name: "Demo",
  age: 20,
};

console.log(user);
// Union type vs Intersection Type
// chỉ lấy phần giống nhau
type Combiable = string | number;
type Numeric = number | boolean;
type Universal = Combiable & Numeric;
let testUniversal: Universal = 10; // Lấy phần number

//!Type Guard
class Dog {
  bark() {
    console.log("Gau Gau");
  }
}

class Cat {
  meow() {
    console.log("Meo Meo");
  }
}

const makeSound = (pet: Dog | Cat) => {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
};

makeSound(new Dog());
