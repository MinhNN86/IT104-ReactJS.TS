class Rectangle {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  set setWidth(newWidth: number) {
    if (newWidth < 0) {
      console.log("Chiều rộng không hợp lệ");
    } else {
      this.width = newWidth;
    }
  }
  set setHeight(newHeight: number) {
    if (newHeight < 0) {
      console.log("Chiều dài không hợp lệ");
    } else {
      this.height = newHeight;
    }
  }

  dienTich(): number {
    return this.width * this.height;
  }

  chuVi(): number {
    return (this.width + this.height) * 2;
  }

  printInfo(): void {
    console.log(
      `
Chiều rộng: ${this.width}
Chiều cao: ${this.height}
Chu vi: ${this.chuVi()}
Diện tích: ${this.dienTich()}
        `
    );
  }
}

let hinhChuNhat = new Rectangle(10, 5);
hinhChuNhat.printInfo();
hinhChuNhat.setHeight = 15;
hinhChuNhat.setWidth = 10;
hinhChuNhat.printInfo();
