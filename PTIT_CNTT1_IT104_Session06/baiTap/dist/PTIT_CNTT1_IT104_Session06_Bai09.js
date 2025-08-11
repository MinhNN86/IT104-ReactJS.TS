class Book {
    id;
    title;
    author;
    stock;
    status;
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    id;
    name;
    contact;
    books = [];
    status;
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
}
class LendedBook {
    memberId;
    bookId;
    dueDate;
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    books = [];
    members = [];
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện");
        this.books.forEach((book) => console.log(`ID: ${book.id}
        Title: ${book.title}
        Author: ${book.author}
        Stock: ${book.stock}
        Status: ${book.status} 
        ---------------------`));
    }
    registerMember(id, name, contact) {
        const newMember = new Member(id, name, contact, "active");
        this.members.push(newMember);
    }
    blockMember(memberId) {
        const member = this.members.find((m) => m.id === memberId);
        if (member) {
            member.status = "inactive";
        }
        else {
            console.log("Không tìm thấy thành viên");
        }
    }
    showMembers() {
        console.log("Danh sách thành viên");
        if (this.members.length === 0) {
            console.log("(Chưa có thành viên)");
            return;
        }
        this.members.forEach((m) => {
            const listBook = m.books
                .map((book) => `- [${book.id}] ${book.title} — ${book.author} | stock: ${book.stock} | status: ${book.status}`)
                .join("\n");
            console.log(`ID: ${m.id}
Name: ${m.name}
Contact: ${m.contact}
Danh sách sách thuê:
${listBook || "(chưa mượn sách)"}
Status: ${m.status}
---------------------`);
        });
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
lib.registerMember(1, "Alice", "alice@example.com");
lib.registerMember(2, "Bob", "bob@example.com");
console.log("\n== Members sau khi đăng ký ==");
lib.showMembers();
lib.blockMember(2);
console.log("\n== Members sau khi block Bob ==");
lib.showMembers();
export {};
