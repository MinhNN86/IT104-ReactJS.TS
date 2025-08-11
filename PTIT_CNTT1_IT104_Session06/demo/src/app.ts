//! Tính trừu tượng (Abstraction): bản thiết kế chung (khuôn mẫu) cho các lớp khác
abstract class Animal {
  abstract makeSound(): void; // Abstract Method
  move(): void {
    console.log("Đang di chuyển");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Gau Gau");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meo Meo");
  }
}

const animal: Animal[] = [new Dog(), new Cat()];

animal.forEach((animal) => {
  animal.makeSound();
  animal.move();
});

//! Abstract Method: khai báo không logic
// một giao diện bắt buộc cho các lớp con kế thừa: mọi lớp con đều phải triển khai (override)
abstract class Polygon {
  abstract getName(): string;
  abstract getArea(): number;
  getInfo(): void {
    console.log(
      `Đây là hình: ${this.getName()} có diện tích ${this.getArea()}`
    );
  }
}
// Khởi tại các lớp con kế thừa từ abstract class
class Square extends Polygon {
  constructor(private size: number) {
    super();
  }
  getName(): string {
    return "Hình vuông";
  }
  getArea(): number {
    return this.size ** 2;
  }
}

class Triangle extends Polygon {
  constructor(private width: number, private height: number) {
    super();
  }
  getName(): string {
    return "Hình tam giác";
  }
  getArea(): number {
    return 0.5 * this.width * this.height;
  }
}

// Khởi tạo đối tượng từ lớp con
const shape: Polygon[] = [new Square(5), new Triangle(2, 5)];

shape.forEach((shape) => shape.getInfo());

//! Interface
interface Sale {
  name: string;
  sale(): void;
}

interface Marketing {
  name: string;
  marketing(): void;
}

// kế thừa
interface DGMarketing extends Marketing {
  dgMarketing(): void;
}

// Khởi tạo lớp
class RK implements Sale, Marketing, DGMarketing {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sale(): void {
    console.log("Doing Sale");
  }
  marketing(): void {
    console.log("Doing Marketing");
  }
  dgMarketing(): void {
    console.log("Doing DGMarketing");
  }
}

// Khởi tạo đối tượng
const result: Marketing = new RK("Demo");
result.marketing();
