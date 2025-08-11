interface changeSpeed {
  speedUp(): void;
  speedDown(): void;
  stop(): void;
}

class Vehicle implements changeSpeed {
  private speed: number;
  constructor(speed: number) {
    this.speed = speed;
  }
  speedDown(): void {
    this.speed -= 1;
  }
  speedUp(): void {
    this.speed += 1;
  }
  stop(): void {
    this.speed = 0;
  }
  showSpeed(): void {
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
