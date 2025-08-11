interface Geometry {
  calculateArea(): number;
  calculatePerimeter(): number;
  printInfo(): void;
}

class Circle implements Geometry {
  constructor(private radius: number) {}
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
  printInfo(): void {
    console.log(
      `Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`
    );
  }
}

class Rectangle implements Geometry {
  constructor(private width: number, private height: number) {}
  calculateArea(): number {
    return this.width * this.height;
  }
  calculatePerimeter(): number {
    return (this.width + this.height) * 2;
  }
  printInfo(): void {
    console.log(
      `Diện tích ${this.calculateArea()} - Chu vi: ${this.calculatePerimeter()}`
    );
  }
}

const c = new Circle(5);
const s = new Rectangle(10, 5);

c.printInfo();
s.printInfo();
