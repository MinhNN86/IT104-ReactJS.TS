class Animal {
  private name: string;
  protected age: number;
  public species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  get getName(): string {
    return this.name;
  }

  set setName(newName: string) {
    this.name = newName;
  }

  get getAge(): number {
    return this.age;
  }

  set setAge(newAge: number) {
    this.age = newAge;
  }

  speak(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  breed: string;
  constructor(name: string, age: number, species: string, breed: string) {
    super(name, age, species);
    this.breed = breed;
  }

  // Ghi đè phương thức (Override)
  speak(): void {
    console.log("Woof");
  }
}

class Cat extends Animal {
  breed: string;
  constructor(name: string, age: number, species: string, breed: string) {
    super(name, age, species);
    this.breed = breed;
  }

  // Ghi đè phương thức (Override)
  speak(): void {
    console.log("Meow");
  }
}

class Rabbit extends Animal {
  breed: string;
  constructor(name: string, age: number, species: string, breed: string) {
    super(name, age, species);
    this.breed = breed;
  }

  // Ghi đè phương thức (Override)
  speak(): void {
    console.log("Squeak");
  }
}

const dog = new Dog("Demo", 2, "Dog", "Husky");
