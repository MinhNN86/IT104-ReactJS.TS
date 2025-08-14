class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public year: number
  ) {}
}

class EBook extends Book {
  constructor(
    id: number,
    title: string,
    author: string,
    year: number,
    public fileSize: number
  ) {
    super(id, title, author, year);
  }
}

class Library<T extends Book> {
  private items: T[] = [];

  addBook(book: T): void {
    if (this.items.some((b) => b.id === book.id)) {
      console.log("ID book đã tồn tại");
    } else {
      this.items.push(book);
    }
  }

  getBookById(id: number): T | undefined {
    return this.items.find((b) => b.id === id);
  }

  removeBook(id: number): void {
    if (this.items.some((b) => b.id === id)) {
      this.items = this.items.filter((b) => b.id !== id);
    } else {
      console.log("ID sách không tồn tại");
    }
  }

  updateBook(id: number, updatedBook: T): void {
    const index = this.items.findIndex((b) => b.id === id);
    if (index !== -1) {
      updatedBook.id = id;
      this.items[index] = updatedBook;
    } else {
      console.log("Không tìm thấy sách");
    }
  }

  listBooks(): T[] {
    return [...this.items];
  }

  findBooksByTitleOrAuthor(searchTerm: string): T[] {
    const search = searchTerm.trim().toLowerCase();
    if (!search) return [];
    return this.items.filter(
      (b) =>
        b.title.toLowerCase().includes(search) ||
        b.author.toLowerCase().includes(search)
    );
  }

  getTotalBooks(): number {
    return this.items.length;
  }

  findBooksByYear(year: number): T[] {
    return this.items.filter((b) => b.year === year);
  }
}

/* ===================== DEMO ===================== */

// Thư viện sách giấy
const lib = new Library<Book>();

// 1) Thêm sách
lib.addBook(new Book(1, "Clean Code", "Robert C. Martin", 2008));
lib.addBook(new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 1999));
lib.addBook(new Book(3, "You Don't Know JS", "Kyle Simpson", 2015));

// 2) Liệt kê & đếm
console.log("Tất cả sách:", lib.listBooks());
console.log("Tổng số sách:", lib.getTotalBooks()); // 3

// 3) Tìm theo ID
console.log("Tìm id=2:", lib.getBookById(2));

// 4) Cập nhật sách (full object)
lib.updateBook(
  3,
  new Book(3, "You Don't Know JS (2nd Edition)", "Kyle Simpson", 2020)
);
console.log("Sau cập nhật id=3:", lib.getBookById(3));

// 5) Tìm theo tên hoặc tác giả
console.log('Tìm "programmer":', lib.findBooksByTitleOrAuthor("programmer"));
console.log('Tìm "martin":', lib.findBooksByTitleOrAuthor("martin"));

// 6) Tìm theo năm
console.log("Sách xuất bản năm 1999:", lib.findBooksByYear(1999));

// 7) Xoá sách
lib.removeBook(2);
console.log("Sau khi xoá id=2, tổng:", lib.getTotalBooks());
console.log("Danh sách hiện tại:", lib.listBooks());

// ================= DEMO với EBook =================
const eLib = new Library<EBook>();
eLib.addBook(new EBook(100, "Refactoring", "Martin Fowler", 1999, 12.5));
eLib.addBook(new EBook(101, "Design Patterns", "GoF", 1994, 8.2));

console.log("EBooks:", eLib.listBooks());
console.log("EBooks năm 1999:", eLib.findBooksByYear(1999));

// Cập nhật ebook (giữ id, có thể đổi fileSize)
eLib.updateBook(
  100,
  new EBook(100, "Refactoring (2nd)", "Martin Fowler", 2018, 14.0)
);
console.log("EBook #100 sau cập nhật:", eLib.getBookById(100));
