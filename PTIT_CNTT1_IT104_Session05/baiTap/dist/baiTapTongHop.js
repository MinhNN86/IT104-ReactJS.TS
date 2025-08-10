class Animal {
    name;
    age;
    species;
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        this.age = newAge;
    }
    speak() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    // Ghi đè phương thức (Override)
    speak() {
        console.log("Woof");
    }
}
class Cat extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    // Ghi đè phương thức (Override)
    speak() {
        console.log("Meow");
    }
}
class Rabbit extends Animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    // Ghi đè phương thức (Override)
    speak() {
        console.log("Squeak");
    }
}
const dog = new Dog("Demo", 2, "Dog", "Husky");
export {};
