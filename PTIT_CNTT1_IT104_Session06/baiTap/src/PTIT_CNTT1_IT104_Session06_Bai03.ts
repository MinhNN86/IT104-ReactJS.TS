abstract class Shape {
  // Abstract method => lớp con bắt buộc phải viết lại
  abstract getArea(): number;
  // Method thường => lớp con kế thừa logic này, không bắt buộc override
  getInfo(): void {
    console.log(`Diện tích: ${this.getArea()}`);
  }
}

class Square extends Shape {
  private size: number;
  constructor(size: number) {
    super();
    this.size = size;
  }
  getArea(): number {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const s = new Square(5);
const c = new Circle(3);

s.getInfo();
c.getInfo();
