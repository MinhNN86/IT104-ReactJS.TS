class Vehicle {
    id;
    name;
    year;
    company;
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    get getCompany() {
        return this.company;
    }
    get getYear() {
        return this.year;
    }
}
let vehicle = new Vehicle(1, "Demo", 2025, "Toyota");
console.log(`
ID: ${vehicle.id}
Name: ${vehicle.name}
Year: ${vehicle.getYear}
Company: ${vehicle.getCompany}
`);
export {};
