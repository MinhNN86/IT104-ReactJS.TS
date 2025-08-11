class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`Hình: ${this.getName()}
Chiều rộng: ${this.width}
Chiều cao: ${this.height}
        `);
    }
}
const rect = new Rectangle("Hình chữ nhật", 10, 5);
rect.getSize();
export {};
