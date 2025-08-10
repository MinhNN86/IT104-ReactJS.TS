class Vehicle {
  name: string;
  year: number;
  company: string;
  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }
}

let vehicles: Vehicle[] = [
  new Vehicle("Demo", 2025, "Example"),
  new Vehicle("Demo1", 2024, "Example1"),
];

vehicles.forEach((e) => {
  console.log(`Tên phương tiện ${e.name}
Năm sản xuất: ${e.year}
Hãng xe: ${e.company}`);
});
