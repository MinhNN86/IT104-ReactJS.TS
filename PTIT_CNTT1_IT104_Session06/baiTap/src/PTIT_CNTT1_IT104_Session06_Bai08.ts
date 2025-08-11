class Book {
  id: number;
  title: string;
  author: string;
  stock: number;
  status: string;

  constructor(
    id: number,
    title: string,
    author: string,
    stock: number,
    status: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.stock = stock;
    this.status = status;
  }
}

class Member {
  id: number;
  name: string;
  contact: string;
  books: Book[] = [];
  status: string;

  constructor(id: number, name: string, contact: string, status: string) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.status = status;
  }
}

class LendedBook {
  memberId: number;
  bookId: number;
  dueDate: Date;
  constructor(memberId: number, bookId: number, dueDate: Date) {
    this.memberId = memberId;
    this.bookId = bookId;
    this.dueDate = dueDate;
  }
}

class Library {
  books: Book[] = [];
  members: Member[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  showBooks(): void {
    console.log("Danh sách sách trong thư viện");
    this.books.forEach((book) =>
      console.log(
        `ID: ${book.id}
        Title: ${book.title}
        Author: ${book.author}
        Stock: ${book.stock}
        Status: ${book.status} 
        ---------------------`
      )
    );
  }
}

const lib = new Library();
const b1 = new Book(1, "Clean Code", "Robert C. Martin", 5, "available");
const b2 = new Book(2, "You Don't Know JS", "Kyle Simpson", 3, "available");
const b3 = new Book(3, "The Pragmatic Programmer", "Andy Hunt", 2, "available");
lib.addBook(b1);
lib.addBook(b2);
lib.addBook(b3);
lib.showBooks();
