class Shape {
    // Method thường => lớp con kế thừa logic này, không bắt buộc override
    getInfo() {
        console.log(`Diện tích: ${this.getArea()}`);
    }
}
class Square extends Shape {
    size;
    constructor(size) {
        super();
        this.size = size;
    }
    getArea() {
        return this.size ** 2;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
const s = new Square(5);
const c = new Circle(3);
s.getInfo();
c.getInfo();
export {};
