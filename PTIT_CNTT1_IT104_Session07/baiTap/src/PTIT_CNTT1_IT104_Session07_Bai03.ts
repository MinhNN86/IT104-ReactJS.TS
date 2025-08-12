abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeNoise(): void;

  printName(): void {
    console.log(`Tên: ${this.name}`);
  }
}

class Cat extends Animal {
  makeNoise(): void {
    console.log("Meo Meo");
  }
}

class Dog extends Animal {
  makeNoise(): void {
    console.log("Gâu Gâu");
  }
}

const myCat = new Cat("Tom");
const myDog = new Dog("Spike");

myCat.printName();
myCat.makeNoise();

myDog.printName();
myDog.makeNoise();
