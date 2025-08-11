class Animal {
    name;
    category;
    foodType;
    age;
    constructor(name, age, category, foodType) {
        this.name = name;
        this.age = age;
        this.category = category;
        this.foodType = foodType;
    }
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
        else {
            console.log("Tuổi không hợp lệ");
        }
    }
    getDetails() {
        return `Name: ${this.name}, Age ${this.age}, Category ${this.category}`;
    }
}
class Mammal extends Animal {
    furColor;
    constructor(name, age, furColor) {
        super(name, age, "Mammal", "Carnivore");
        this.furColor = furColor;
    }
    get getFurColor() {
        return this.furColor;
    }
    set setFurColor(color) {
        this.furColor = color;
    }
    sound() {
        return `Tiếng thú có vú`;
    }
    move() {
        console.log(`${this.name} đang chạy`);
    }
    feed() {
        console.log(`${this.name} ăn thịt`);
    }
}
class Bird extends Animal {
    wingSpan;
    constructor(name, age, wingSpan) {
        super(name, age, "Bird", "Insectivore");
        this.wingSpan = wingSpan;
    }
    sound() {
        return `Tiếng chim`;
    }
    move() {
        console.log(`${this.name} đang bay`);
    }
    feed() {
        console.log(`${this.name} ăn côn trùng`);
    }
}
class Reptile extends Animal {
    venomous;
    constructor(name, age, venomous) {
        super(name, age, "Reptile", "Herbivore");
        this.venomous = venomous;
    }
    get getVenomous() {
        return this.venomous;
    }
    set setVenomous(value) {
        this.venomous = value;
    }
    sound() {
        return `Tiếng bò sát`;
    }
    move() {
        console.log(`${this.name} đang bò`);
    }
    feed() {
        console.log(`${this.name} ăn thực vật`);
    }
}
class Zookeeper {
    careForAnimal(animal) {
        console.log(`Đang chăm sóc ${animal.name} (kiểm tra sức khoẻ, tắm rửa)`);
    }
    feedAnimal(animal) {
        console.log(`Đang cho ${animal.name} ăn`);
        animal.feed();
    }
    report(animal) {
        console.log(`=== Báo cáo động vật ===
${animal.getDetails()}
Âm thanh: ${animal.sound()}
Tình trạng sức khoẻ: Tốt;
Hành vi ăn uống: ${animal.foodType}
Thời gian chăm sóc gần nhất: ${new Date().toLocaleString()}
=====================`);
    }
}
const zooAnimals = [
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
export {};
