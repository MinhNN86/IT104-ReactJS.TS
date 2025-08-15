class Passenger {
  static currentId = 1;
  passengerId: number;
  name: string;
  passportNumber: string;
  constructor(name: string, passportNumber: string) {
    this.passengerId = Passenger.currentId++;
    this.name = name;
    this.passportNumber = passportNumber;
  }

  getDetails(): string {
    return `ID: ${this.passengerId}, Name: ${this.name}, Passport: ${this.passportNumber}`;
  }
}

abstract class Flight {
  public flightNumber: string;
  public origin: string;
  public destination: string;
  public departureTime: Date;
  public capacity: number;
  public bookedSeats: number;
  constructor(
    flightNumber: string,
    origin: string,
    destination: string,
    departureTime: Date,
    capacity: number
  ) {
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.departureTime = new Date(departureTime);
    this.capacity = capacity;
    this.bookedSeats = 0;
  }

  isFull(): boolean {
    if (this.bookedSeats >= this.capacity) {
      return true;
    } else {
      return false;
    }
  }

  bookSeat(): void {
    if (this.isFull()) {
      alert("Máy bay đã hết chỗ");
    } else {
      this.bookedSeats++;
    }
  }

  abstract calculateBaggageFee(weight: number): number;
}

class DomesticFlight extends Flight {
  calculateBaggageFee(weight: number): number {
    return weight * 50000;
  }
}

class InternationalFlight extends Flight {
  calculateBaggageFee(weight: number): number {
    return 10 * weight;
  }
}

class Booking {
  static currentId = 1;
  bookingId: number;
  passenger: Passenger;
  flight: Flight;
  numberOfTickets: number;
  totalCost: number;
  constructor(passenger: Passenger, flight: Flight, numberOfTickets: number) {
    this.bookingId = Booking.currentId++;
    this.passenger = passenger;
    this.flight = flight;
    this.numberOfTickets = numberOfTickets;
    this.totalCost = numberOfTickets * 1000000;
  }
  getBookingDetails(): string {
    return `Booking #${this.bookingId}, Passenger: ${
      this.passenger.name
    }, Flight: ${this.flight.flightNumber}, Tickets: ${
      this.numberOfTickets
    }, Total: ${this.totalCost.toLocaleString()} VND`;
  }
}

class GenericRepository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }

  findIndex(predicate: (item: T) => boolean): number {
    return this.items.findIndex(predicate);
  }

  remove(predicate: (item: T) => boolean): void {
    this.items = this.items.filter((item) => !predicate(item));
  }
}

class AirlineManager {
  private flightRepo: GenericRepository<Flight>;
  private passengerRepo: GenericRepository<Passenger>;
  private bookingRepo: GenericRepository<Booking>;
  constructor() {
    this.flightRepo = new GenericRepository<Flight>();
    this.passengerRepo = new GenericRepository<Passenger>();
    this.bookingRepo = new GenericRepository<Booking>();
  }

  addFlight(flight: Flight): void {
    this.flightRepo.add(flight);
    alert("Đã thêm chuyến bay thành công");
  }

  addPassenger(name: string, passportNumber: string): Passenger {
    const passenger = new Passenger(name, passportNumber);
    this.passengerRepo.add(passenger);
    alert("Thêm hành khách thành công");
    return passenger;
  }

  createBooking(
    passengerId: number,
    flightNumber: string,
    numberOfTickets: number
  ): Booking | null {
    const passenger = this.passengerRepo.find(
      (p) => p.passengerId === passengerId
    );
    const flight = this.flightRepo.find((f) => f.flightNumber === flightNumber);

    if (!passenger || !flight) {
      alert("Không tìm thấy chuyến bay hoặc hành khách");
      return null;
    } else {
      if (flight.bookedSeats + numberOfTickets > flight.capacity) {
        alert("Chuyến bay đã đầy");
        return null;
      } else {
        for (let i = 1; i <= numberOfTickets; i++) {
          flight.bookSeat();
        }
        const booking = new Booking(passenger, flight, numberOfTickets);
        this.bookingRepo.add(booking);
        alert("Đặt vé thành công");
        return booking;
      }
    }
  }

  cancelBooking(bookingId: number): void {
    const booking = this.bookingRepo.find((b) => b.bookingId === bookingId);
    if (!booking) {
      alert("Không tìm thấy lịch đặt");
      return;
    }
    this.bookingRepo.remove((b) => b.bookingId === bookingId);
  }

  listAvailableFlights(origin: string, destination: string): void {
    const availableFlight = this.flightRepo
      .getAll()
      .filter(
        (f) =>
          f.origin === origin && f.destination === destination && !f.isFull()
      );
    alert(
      availableFlight
        .map((f) => `${f.flightNumber} - ${f.origin} -> ${f.destination}`)
        .join("\n") || "Không có chuyến bay"
    );
  }

  listBookingsByPassenger(passengerId: number): void {
    const booking = this.bookingRepo
      .getAll()
      .filter((b) => b.passenger.passengerId === passengerId);
    alert(
      booking.map((b) => b.getBookingDetails()).join("\n") ||
        "Không có trong danh sách đặt vé."
    );
  }

  calculateTotalRevenue(): number {
    const total = this.bookingRepo
      .getAll()
      .reduce((sum, b) => sum + b.totalCost, 0);
    return total;
  }

  countFlightByType(): void {
    const result = this.flightRepo.getAll().reduce(
      (acc, flight) => {
        if (flight instanceof DomesticFlight) {
          acc.domestic++;
        } else if (flight instanceof InternationalFlight) {
          acc.international++;
        }
        return acc;
      },
      { domestic: 0, international: 0 }
    );

    alert(`Số chuyến bay nội địa ${result.domestic}
      Số chuyến bay quốc tế: ${result.international}`);
  }

  updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
    const flight = this.flightRepo.find((f) => f.flightNumber === flightNumber);
    if (flight) {
      flight.departureTime = new Date(newDepartureTime);
      alert("Cập nhật giờ bay thành công");
    } else {
      alert("Không tìm thấy chuyến bay");
    }
  }

  getFlightPassengerList(flightNumber: string): void {
    const booking = this.bookingRepo
      .getAll()
      .filter((b) => b.flight.flightNumber === flightNumber);
    const names = booking.map((b) => `${b.passenger.name}`);
    alert(names.join(`\n`) || "Không có hành khách nào");
  }
}

const manager = new AirlineManager();

function mainMenu() {
  let choice;
  while (true) {
    choice = prompt(`--- MENU ---
1. Thêm hành khách
2. Thêm chuyến bay
3. Đặt vé
4. Hủy đặt vé
5. Xem chuyến bay còn chỗ
6. Xem vé đã đặt theo hành khách
7. Tính tổng doanh thu
8. Đếm loại chuyến bay
9. Cập nhật giờ bay
10. Xem hành khách theo chuyến
11. Thoát`);

    switch (choice) {
      case "1": {
        const name = prompt("Nhập tên hành khách:") ?? "";
        const passport = prompt("Nhập số hộ chiếu: ") ?? "";
        manager.addPassenger(name, passport);
        break;
      }

      case "2": {
        const type = prompt("Loại chuyến bay? (1: Nội địa, 2: Quốc Tế)");
        const flightNumber = prompt("Số hiệu chuyến bay");
        const origin = prompt("Nơi đi: ");
        const destination = prompt("Nơi đến: ");
        const time = prompt("Thời gian khởi hành (YYYY-MM-DD HH:mm):");
        const capacity = parseInt(prompt("Sức chứa: ") ?? "");

        if (type && flightNumber && origin && destination && time && capacity) {
          const timeObj = new Date(time);
          let flight;
          if (type === "1") {
            flight = new DomesticFlight(
              flightNumber,
              origin,
              destination,
              timeObj,
              capacity
            );
          } else if (type === "2") {
            flight = new InternationalFlight(
              flightNumber,
              origin,
              destination,
              timeObj,
              capacity
            );
          } else {
            alert("Nhập sai loại chuyến bay");
            break;
          }
          manager.addFlight(flight);
          alert("Thêm chuyến bay thành công");
          break;
        } else {
          alert("Thông tin nhập vào không hợp lệ");
          break;
        }
      }

      case "3": {
        const passengerId = parseInt(prompt("ID hành khách:") ?? "0");
        const flightNumber = prompt("Số hiệu chuyến bay:") ?? "";
        const tickets = parseInt(prompt("Số lượng vé:") ?? "0");

        const booking = manager.createBooking(
          passengerId,
          flightNumber,
          tickets
        );
        if (booking) {
          alert("Tạo lịch đặt vé thành công");
        }
        break;
      }

      case "4": {
        const bookingId = parseInt(prompt("Nhập mã đặt vé cần huỷ: ") ?? "0");
        manager.cancelBooking(bookingId);
        break;
      }

      case "5": {
        const origin = prompt("Nơi đi: ") ?? "";
        const destination = prompt("Nơi đến: ") ?? "";
        manager.listAvailableFlights(origin, destination);
        break;
      }

      case "6": {
        const id = parseInt(prompt("Nhập ID hành khách: ") ?? "0");
        manager.listBookingsByPassenger(id);
        break;
      }

      case "7": {
        const total = manager.calculateTotalRevenue();
        alert(`Tổng doanh thu: ${total.toLocaleString()} VND`);
        break;
      }

      case "8": {
        manager.countFlightByType();
        break;
      }

      case "9": {
        const flightNumber = prompt("Số hiệu chuyến bay: ") ?? "";
        const newTime = prompt("Thời gian mới (YYYY-MM-DD HH:mm):") ?? "";
        const objTime = new Date(newTime);
        manager.updateFlightTime(flightNumber, objTime);
        break;
      }

      case "10": {
        const flightNumber = prompt("Số hiệu chuyến bay: ") ?? "";
        manager.getFlightPassengerList(flightNumber);
        break;
      }

      case "11": {
        alert("Thoát chương trình");
        return;
      }

      default:
        alert("Lựa chọn không hợp lệ");
    }
  }
}

mainMenu();
