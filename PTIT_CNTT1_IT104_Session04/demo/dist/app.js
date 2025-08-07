//! Array
//Cách 1: Array
let numbers = [1, 2, 3, 4];
let seasons = ["Mua xuan", "Mua ha"];
//Cách 2: Array<kieuDuLieu>
let numbers1 = [1, 2, 3, 4];
// Mảng hai chiều
let matrix = [
    [1, 2],
    [3, 4],
];
// Mảng với readonly: Không thêm sửa xoá được
const readonlyNumber = [1, 2, 3];
//! Object (key: value)
// Cách 1:
let person = {
    name: "Demo",
    age: 18,
};
let student = {
    name: "Demo1",
    age: 19,
};
let item = {
    id: 1,
    name: "Demoo",
    price: 1000,
};
// Thao tác CRUD
// Read
console.log(item);
console.log(item.name);
let person2 = {
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
let value;
let value2;
const showStatus = (status) => {
    if (status === "loading") {
        console.log("Đang tải trang");
    }
    else if (status === "success") {
        console.log("Tải trang thành công");
    }
    else {
        console.log("Lỗi tải trang");
    }
};
showStatus("loading");
let userId = 1;
console.log(userId);
let user = {
    name: "Demo",
    age: 20,
};
console.log(user);
let testUniversal = 10; // Lấy phần number
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
const makeSound = (pet) => {
    if (pet instanceof Dog) {
        pet.bark();
    }
    else {
        pet.meow();
    }
};
makeSound(new Dog());
export {};
