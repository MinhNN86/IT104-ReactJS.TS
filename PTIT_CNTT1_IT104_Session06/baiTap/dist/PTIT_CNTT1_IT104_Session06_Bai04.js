class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
    printInfo() {
        console.log(`Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`);
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
    printInfo() {
        console.log(`Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`);
    }
}
const c = new Circle(5);
const s = new Rectangle(10, 5);
c.printInfo();
s.printInfo();
export {};
