interface IAnimal {
  name: string;
  category: string;
  sound(): string;
  getDetails(): string;
  move(): void;
  feed(): void;
}

interface FeedingBehavior {
  feed(): void;
}

abstract class Animal implements IAnimal, FeedingBehavior {
  name: string;
  category: string;
  foodType: string;
  private age: number;
  constructor(name: string, age: number, category: string, foodType: string) {
    this.name = name;
    this.age = age;
    this.category = category;
    this.foodType = foodType;
  }

  get getAge(): number {
    return this.age;
  }

  set setAge(newAge: number) {
    if (newAge > 0) {
      this.age = newAge;
    } else {
      console.log("Tuổi không hợp lệ");
    }
  }

  getDetails(): string {
    return `Name: ${this.name}, Age ${this.age}, Category ${this.category}`;
  }
  abstract sound(): string;
  abstract move(): void;
  abstract feed(): void;
}

class Mammal extends Animal {
  private furColor: string;
  constructor(name: string, age: number, furColor: string) {
    super(name, age, "Mammal", "Carnivore");
    this.furColor = furColor;
  }

  get getFurColor(): string {
    return this.furColor;
  }

  set setFurColor(color: string) {
    this.furColor = color;
  }

  sound(): string {
    return `Tiếng thú có vú`;
  }

  move(): void {
    console.log(`${this.name} đang chạy`);
  }

  feed(): void {
    console.log(`${this.name} ăn thịt`);
  }
}

class Bird extends Animal {
  wingSpan: number;
  constructor(name: string, age: number, wingSpan: number) {
    super(name, age, "Bird", "Insectivore");
    this.wingSpan = wingSpan;
  }
  sound(): string {
    return `Tiếng chim`;
  }

  move(): void {
    console.log(`${this.name} đang bay`);
  }

  feed(): void {
    console.log(`${this.name} ăn côn trùng`);
  }
}

class Reptile extends Animal {
  private venomous: boolean;
  constructor(name: string, age: number, venomous: boolean) {
    super(name, age, "Reptile", "Herbivore");
    this.venomous = venomous;
  }

  get getVenomous(): boolean {
    return this.venomous;
  }

  set setVenomous(value: boolean) {
    this.venomous = value;
  }

  sound(): string {
    return `Tiếng bò sát`;
  }

  move(): void {
    console.log(`${this.name} đang bò`);
  }

  feed(): void {
    console.log(`${this.name} ăn thực vật`);
  }
}

class Zookeeper {
  careForAnimal(animal: Animal): void {
    console.log(`Đang chăm sóc ${animal.name} (kiểm tra sức khoẻ, tắm rửa)`);
  }

  feedAnimal(animal: Animal): void {
    console.log(`Đang cho ${animal.name} ăn`);
    animal.feed();
  }

  report(animal: Animal): void {
    console.log(`=== Báo cáo động vật ===
${animal.getDetails()}
Âm thanh: ${animal.sound()}
Tình trạng sức khoẻ: Tốt;
Hành vi ăn uống: ${animal.foodType}
Thời gian chăm sóc gần nhất: ${new Date().toLocaleString()}
=====================`);
  }
}

const zooAnimals: Animal[] = [
  new Mammal("Sư tử", 5, "Vàng"),
  new Bird("Chim sẻ", 2, 0.25),
  new Reptile("Rùa", 80, false),
];

const keeper = new Zookeeper();

zooAnimals.forEach((animal) => {
  console.log(`\n== ${animal.name} ==`);
  animal.move();
  console.log("Âm thanh:", animal.sound());
  keeper.careForAnimal(animal);
  keeper.feedAnimal(animal);
  keeper.report(animal);
});
