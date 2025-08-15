class Audience {
  static countId = 1;
  id: number;
  name: string;
  email: string;
  phone: string;
  constructor(name: string, email: string, phone: string) {
    this.id = Audience.countId++;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getDetails(): string {
    return `Id: ${this.id} - Name: ${this.name} - Email: ${this.email} - Phone: ${this.phone}`;
  }
}

abstract class Movie {
  static countId = 1;
  id: number;
  title: string;
  genre: string;
  ticketPrice: number;
  isShowing: boolean;
  constructor(title: string, genre: string, ticketPrice: number) {
    this.id = Movie.countId++;
    this.title = title;
    this.genre = genre;
    this.ticketPrice = ticketPrice;
    this.isShowing = true;
  }

  startShow() {
    this.isShowing = true;
  }

  stopShow() {
    this.isShowing = false;
  }

  abstract calculateTicketCost(quantity: number): number;
  abstract getSpecialOffers(): string[];
  abstract getMovieInfo(): string;
}

class ActionMovie extends Movie {
  constructor(title: string, ticketPrice: number) {
    super(title, "Action", ticketPrice);
  }

  calculateTicketCost(quantity: number): number {
    return this.ticketPrice * quantity;
  }

  getSpecialOffers(): string[] {
    return ["Miễn phí bắp rang", "Tặng poster"];
  }

  getMovieInfo(): string {
    return "Phim hành động gay cấn, kỹ xảo hoành tráng";
  }
}

class ComedyMovie extends Movie {
  constructor(title: string, ticketPrice: number) {
    super(title, "Comedy", ticketPrice);
  }

  calculateTicketCost(quantity: number): number {
    return this.ticketPrice * quantity;
  }

  getSpecialOffers(): string[] {
    return ["Giảm 10% cho nhóm trên 4 người"];
  }

  getMovieInfo(): string {
    return "Phim hài nhẹ nhàng, vui nhộn";
  }
}

class AnimationMovie extends Movie {
  constructor(title: string, ticketPrice: number) {
    super(title, "Animation", ticketPrice);
  }

  calculateTicketCost(quantity: number): number {
    return this.ticketPrice * quantity;
  }

  getSpecialOffers(): string[] {
    return ["Giảm giá cho trẻ em dưới 12 tuổi"];
  }

  getMovieInfo(): string {
    return "Phim hoạt hình với hình ảnh sống động";
  }
}

class TicketBooking {
  static countId = 1;
  bookingId: number;
  audience: Audience;
  movie: Movie;
  quantity: number;
  totalPrice: number;
  constructor(audience: Audience, movie: Movie, quantity: number) {
    this.bookingId = TicketBooking.countId++;
    this.audience = audience;
    this.movie = movie;
    this.quantity = quantity;
    this.totalPrice = movie.ticketPrice * quantity;
  }

  getDetail(): string {
    return `Thông tin đặt vé #${this.bookingId}
    - Thông tin khách hàng: 
    ${this.audience.getDetails()}
    - Phim: ${this.movie.title}
    - Số lượng vé ${this.quantity}
    - Tổng giá vé: ${this.totalPrice}
    `;
  }
}

class Cinema {
  movies: Movie[] = [];
  audiences: Audience[] = [];
  bookings: TicketBooking[] = [];

  addAudience(name: string, email: string, phone: string): Audience {
    const audience = new Audience(name, email, phone);
    this.audiences.push(audience);
    return audience;
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  }

  bookTickets(
    audienceId: number,
    movieId: number,
    quantity: number
  ): TicketBooking | null {
    const audience = this.audiences.find((a) => a.id === audienceId);
    if (!audience) {
      return null;
    }

    const movie = this.movies.find((m) => m.id === movieId);
    if (!movie) {
      return null;
    }

    let ticketBooking = new TicketBooking(audience, movie, quantity);
    this.bookings.push(ticketBooking);
    return ticketBooking;
  }

  cancelMovie(movieId: number): void {
    let indexMovie = this.movies.findIndex((m) => m.id === movieId);
    if (indexMovie === -1) {
      alert("Không tìm thấy phim");
    } else {
      this.movies[indexMovie]?.stopShow();
      alert(`Đã dừng chiếu phim ${this.movies[indexMovie]?.title}`);
    }
  }

  listShowingMovies(): void {
    let listMovies = this.movies.filter((m) => m.isShowing === true);
    if (listMovies.length === 0) {
      alert("Không có phim nào đang chiếu");
      return;
    }
    const msg = listMovies
      .map((m) => `Id: ${m.id} - Name: ${m.title}`)
      .join("\n");
    alert("Danh sách phim đang chiếu: \n" + msg);
  }

  listAudienceBookings(audienceId: number): void {
    let audience = this.audiences.find((a) => a.id === audienceId);
    if (!audience) {
      alert("Không tìm thấy khán giả");
      return;
    }

    let booking = this.bookings.filter((b) => b.audience.id === audienceId);
    if (booking.length === 0) {
      alert("Không tìm thấy lịch đặt vé");
      return;
    }
    let msg = booking.map((b) => b.getDetail()).join("\n");
    alert(msg);
  }

  calculateTotalRevenue(): number {
    return this.bookings.reduce(
      (total, curBooking) => total + curBooking.totalPrice,
      0
    );
  }

  getMovieGenreCount(): void {
    const genreCount = this.movies.reduce(
      (acc: { [genre: string]: number }, movie) => {
        acc[movie.genre] = (acc[movie.genre] || 0) + 1;
        return acc;
      },
      {}
    );

    let msg = "Thống kê số lượng phim theo thể loại:\n";
    for (const genre in genreCount) {
      msg += `${genre}: ${genreCount[genre]}\n`;
    }
    alert(msg);
  }

  findById<T extends { id: number }>(
    collection: T[],
    id: number
  ): T | undefined {
    return collection.find((e) => e.id === id);
  }

  getMovieSpecialOffers(movieId: number): void {
    let movie = this.movies.find((m) => m.id === movieId);
    if (!movie) {
      alert("Không tìm thấy phim");
      return;
    }
    alert(movie.getSpecialOffers());
  }
}

function mainMenu() {
  const cinema = new Cinema();
  let choice;
  while (true) {
    choice = prompt(`---Menu---
1. Thêm khán giả mới
2. Thêm phim mới
3. Đặt vé
4. Ngừng chiếu phim
5. Hiển thị danh sách phim đang chiếu
6. Hiển thị các đặt vé của một khán giả
7. Tính và hiển thị tổng doanh thu
8. Đếm số lượng từ thể loại phim
9. Tìm kiếm và hiển thị thông tin bằng mã định danh
10. Hiển thị ưu đãi của một phim
11. Thoát chương trình
    `);

    switch (choice) {
      case "1": {
        const name = prompt("Nhập tên khán giả:") ?? "";
        const email = prompt("Nhập email:") ?? "";
        const phone = prompt("Nhập số điện thoại:") ?? "";
        cinema.addAudience(name, email, phone);
        alert("Thêm khán giả thành công!");
        break;
      }
      case "2": {
        const type = prompt("Loại phim (1: Action, 2: Comedy, 3: Animation):");
        const title = prompt("Tên phim:") ?? "";
        const price = parseFloat(prompt("Giá vé:") ?? "0");
        let movie;
        if (type === "1") {
          movie = new ActionMovie(title, price);
        } else if (type === "2") {
          movie = new ComedyMovie(title, price);
        } else if (type === "3") {
          movie = new AnimationMovie(title, price);
        } else {
          alert("Loại phim không hợp lệ");
          break;
        }
        cinema.addMovie(movie);
        alert("Thêm phim thành công!");
        break;
      }
      case "3": {
        const audienceId = parseInt(prompt("Nhập ID khán giả:") ?? "0", 10);
        const movieId = parseInt(prompt("Nhập ID phim:") ?? "0", 10);
        const quantity = parseInt(prompt("Số lượng vé:") ?? "1", 10);
        const booking = cinema.bookTickets(audienceId, movieId, quantity);
        if (booking) {
          alert("Đặt vé thành công!\n" + booking.getDetail());
        } else {
          alert("Đặt vé thất bại!");
        }
        break;
      }
      case "4": {
        const movieId = parseInt(
          prompt("Nhập ID phim cần ngừng chiếu:") ?? "0",
          10
        );
        cinema.cancelMovie(movieId);
        break;
      }
      case "5": {
        cinema.listShowingMovies();
        break;
      }
      case "6": {
        const audienceId = parseInt(prompt("Nhập ID khán giả:") ?? "0", 10);
        cinema.listAudienceBookings(audienceId);
        break;
      }
      case "7": {
        const total = cinema.calculateTotalRevenue();
        alert(`Tổng doanh thu: ${total}`);
        break;
      }
      case "8": {
        cinema.getMovieGenreCount();
        break;
      }
      case "9": {
        const type = prompt("Tìm theo (1: Phim, 2: Khán giả):");
        const id = parseInt(prompt("Nhập ID:") ?? "0", 10);
        if (type === "1") {
          const movie = cinema.findById(cinema.movies, id);
          if (movie)
            alert(
              `ID: ${movie.id}\nTên: ${movie.title}\nThể loại: ${movie.genre}\nGiá vé: ${movie.ticketPrice}`
            );
          else alert("Không tìm thấy phim.");
        } else if (type === "2") {
          const audience = cinema.findById(cinema.audiences, id);
          if (audience) alert(audience.getDetails());
          else alert("Không tìm thấy khán giả.");
        } else {
          alert("Loại không hợp lệ.");
        }
        break;
      }
      case "10": {
        const movieId = parseInt(prompt("Nhập ID phim:") ?? "0", 10);
        cinema.getMovieSpecialOffers(movieId);
        break;
      }
      case "11":
        alert("Thoát chương trình");
        return;
      default:
        alert("Lựa chọn không hợp lệ");
    }
  }
}

mainMenu();
