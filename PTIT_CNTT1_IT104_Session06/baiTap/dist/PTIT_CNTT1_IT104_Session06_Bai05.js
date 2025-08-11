class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    speedDown() {
        this.speed -= 1;
    }
    speedUp() {
        this.speed += 1;
    }
    stop() {
        this.speed = 0;
    }
    showSpeed() {
        console.log(`Tốc độ phương tiện hiện tại: ${this.speed}`);
    }
}
let vehicle = new Vehicle(50);
vehicle.showSpeed();
vehicle.speedDown();
vehicle.showSpeed();
vehicle.speedUp();
vehicle.showSpeed();
vehicle.stop();
vehicle.showSpeed();
export {};
