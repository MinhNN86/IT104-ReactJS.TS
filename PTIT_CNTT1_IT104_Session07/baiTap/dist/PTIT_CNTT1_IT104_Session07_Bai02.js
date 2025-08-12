class Vehicle {
    id;
    name;
    speed;
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    slowDown() {
        this.speed -= 1;
    }
    speedUp() {
        this.speed += 1;
    }
    showSpeed() {
        return this.speed;
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(id, name, speed, gear) {
        super(id, name, speed);
        this.gear = gear;
    }
    printInfo() {
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
export {};
