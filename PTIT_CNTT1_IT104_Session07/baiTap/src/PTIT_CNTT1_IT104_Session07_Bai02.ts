class Vehicle {
  protected id: number;
  protected name: string;
  protected speed: number;
  constructor(id: number, name: string, speed: number) {
    this.id = id;
    this.name = name;
    this.speed = speed;
  }
  slowDown(): void {
    this.speed -= 1;
  }
  speedUp(): void {
    this.speed += 1;
  }
  showSpeed(): number {
    return this.speed;
  }
}

class Bicycle extends Vehicle {
  private gear: number;
  constructor(id: number, name: string, speed: number, gear: number) {
    super(id, name, speed);
    this.gear = gear;
  }

  printInfo(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Gear : ${this.gear}`);
    console.log(`Speed : ${this.speed}`);
  }
}

const myBike = new Bicycle(1, "Mountain Bike", 10, 5);

console.log("=== Thông tin ban đầu ===");
myBike.printInfo();

myBike.speedUp();
myBike.speedUp();

myBike.slowDown();

console.log("\n=== Sau khi thay đổi tốc độ ===");
myBike.printInfo();

console.log(`Tốc độ hiện tại: ${myBike.showSpeed()}`);
