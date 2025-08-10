class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    get getId() {
        return this.id;
    }
    getInfo() {
        return `${this.title} - ${this.author}`;
    }
    updateInfo(newTitle, newAuthor) {
        this.title = newTitle;
        this.author = newAuthor;
    }
}
class Library {
    books = [];
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("Danh sách sách trong thư viện");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const book = this.books.find((b) => b.getId === id);
        if (book) {
            book.updateInfo(newTitle, newAuthor);
            console.log("Đã cập nhật");
        }
        else {
            console.log("Không tìm thấy");
        }
    }
}
const book1 = new Book(1, "Lập trình TypeScript", "Nguyễn Văn A");
const book2 = new Book(2, "Học React.js", "Trần Văn B");
const book3 = new Book(3, "Thuật toán cơ bản", "Lê Văn C");
const book4 = new Book(4, "Lập trình hướng đối tượng", "Phạm Văn D");
const book5 = new Book(5, "Cấu trúc dữ liệu", "Hoàng Văn E");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
library.updateBookById(3, "Giải thuật nâng cao", "Demo");
library.viewBooks();
export {};
