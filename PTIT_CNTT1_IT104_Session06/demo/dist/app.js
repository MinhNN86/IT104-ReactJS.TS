//! Tính trừu tượng (Abstraction): bản thiết kế chung (khuôn mẫu) cho các lớp khác
class Animal {
    move() {
        console.log("Đang di chuyển");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Gau Gau");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meo Meo");
    }
}
const animal = [new Dog(), new Cat()];
animal.forEach((animal) => {
    animal.makeSound();
    animal.move();
});
//! Abstract Method: khai báo không logic
class Polygon {
    getInfo() {
        console.log(`Đây là hình: ${this.getName()} có diện tích ${this.getArea()}`);
    }
}
// Khởi tại các lớp con kế thừa từ abstract class
class Square extends Polygon {
    size;
    constructor(size) {
        super();
        this.size = size;
    }
    getName() {
        return "Hình vuông";
    }
    getArea() {
        return this.size ** 2;
    }
}
class Triangle extends Polygon {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getName() {
        return "Hình tam giác";
    }
    getArea() {
        return 0.5 * this.width * this.height;
    }
}
// Khởi tạo đối tượng từ lớp con
const shape = [new Square(5), new Triangle(2, 5)];
shape.forEach((shape) => shape.getInfo());
// Khởi tạo lớp
class RK {
    name;
    constructor(name) {
        this.name = name;
    }
    sale() {
        console.log("Doing Sale");
    }
    marketing() {
        console.log("Doing Marketing");
    }
    dgMarketing() {
        console.log("Doing DGMarketing");
    }
}
// Khởi tạo đối tượng
const result = new RK("Demo");
result.marketing();
export {};
