class Book {
  private title: string;
  private author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  getInfo(): string {
    return `${this.title} - ${this.author}`;
  }
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  viewBooks(): void {
    console.log("Danh sách sách trong thư viện");
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getInfo()}`);
    });
  }
}

const book1 = new Book("Lập trình TypeScript", "Nguyễn Văn A");
const book2 = new Book("Học React.js", "Trần Văn B");
const book3 = new Book("Thuật toán cơ bản", "Lê Văn C");
const book4 = new Book("Lập trình hướng đối tượng", "Phạm Văn D");
const book5 = new Book("Cấu trúc dữ liệu", "Hoàng Văn E");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.viewBooks();
