class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Meo Meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Gâu Gâu");
    }
}
const myCat = new Cat("Tom");
const myDog = new Dog("Spike");
myCat.printName();
myCat.makeNoise();
myDog.printName();
myDog.makeNoise();
export {};
