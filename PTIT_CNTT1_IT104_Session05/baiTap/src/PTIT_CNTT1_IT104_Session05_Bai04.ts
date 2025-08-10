class Vehicle {
  readonly id: number;
  public name: string;
  protected year: number;
  private company: string;
  constructor(id: number, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }

  get getCompany(): string {
    return this.company;
  }
  get getYear(): number {
    return this.year;
  }
}

let vehicle = new Vehicle(1, "Demo", 2025, "Toyota");

console.log(
  `
ID: ${vehicle.id}
Name: ${vehicle.name}
Year: ${vehicle.getYear}
Company: ${vehicle.getCompany}
`
);
