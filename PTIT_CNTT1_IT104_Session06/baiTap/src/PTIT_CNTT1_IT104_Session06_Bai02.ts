abstract class Job {
  private type: string;
  constructor(type: string) {
    this.type = type;
  }
  printType(): void {
    console.log(`Loại công việc: ${this.type}`);
  }
  abstract calculateSalary(): number;
}

class PartimeJob extends Job {
  private workingHour: number;
  constructor(workingHour: number) {
    super("Parttime");
    this.workingHour = workingHour;
  }

  calculateSalary(): number {
    return 30000 * this.workingHour;
  }
}

class FulltimeJob extends Job {
  constructor() {
    super("Fulltime");
  }
  calculateSalary(): number {
    return 10000000;
  }
}

const fulltime = new FulltimeJob();
fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary()} VND`);

const partime = new PartimeJob(80);
partime.printType();
console.log(`Lương: ${partime.calculateSalary()} VND`);
