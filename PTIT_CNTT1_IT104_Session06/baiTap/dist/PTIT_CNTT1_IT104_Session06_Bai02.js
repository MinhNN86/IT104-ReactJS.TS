class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class PartimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Parttime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
const fulltime = new FulltimeJob();
fulltime.printType();
console.log(`Lương: ${fulltime.calculateSalary()} VND`);
const partime = new PartimeJob(80);
partime.printType();
console.log(`Lương: ${partime.calculateSalary()} VND`);
export {};
