class Book {
    bookId;
    title;
    price;
    amount;
    type;
    isAvailable;
    constructor(bookId, title, price, amount, type, isAvailable = true) {
        this.bookId = bookId;
        this.title = title;
        this.price = price;
        this.amount = amount;
        this.type = type;
        this.isAvailable = isAvailable;
    }
    borrowBook() {
        if (this.amount > 0) {
            this.amount--;
            if (this.amount === 0)
                this.isAvailable = false;
        }
    }
    returnBook() {
        this.amount++;
        if (this.amount > 0)
            this.isAvailable = true;
    }
    getBookId() {
        return this.bookId;
    }
    getTitle() {
        return this.title;
    }
}
class FictionBook extends Book {
    constructor(id, title, price, amount) {
        super(id, title, price, amount, "Tiểu thuyết");
    }
    calculateLateFee(daysLate) {
        return daysLate * 5000;
    }
}
class ScienceBook extends Book {
    constructor(id, title, price, amount) {
        super(id, title, price, amount, "Khoa học");
    }
    calculateLateFee(daysLate) {
        return daysLate * 10000;
    }
}
class HistoryBook extends Book {
    constructor(id, title, price, amount) {
        super(id, title, price, amount, "Lịch sử");
    }
    calculateLateFee(daysLate) {
        return daysLate * 7000;
    }
}
class Person {
    id;
    name;
    email;
    phone;
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Borrowing {
    transactionId;
    borrower;
    book;
    days;
    totalCost;
    constructor(transactionId, borrower, book, days, totalCost) {
        this.transactionId = transactionId;
        this.borrower = borrower;
        this.book = book;
        this.days = days;
        this.totalCost = totalCost;
    }
    getDetails() {
        console.log(`Mã GD: ${this.transactionId}, Người mượn: ${this.borrower.getName()}, Sách: ${this.book.getTitle()}, Ngày mượn: ${this.days}, Tổng tiền: ${this.totalCost}`);
    }
}
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    findById(id, key) {
        return this.items.find((item) => item[key] === id);
    }
}
class LibraryManager {
    bookIdCounter = 1;
    borrowerIdCounter = 1;
    transactionIdCounter = 1;
    booksRepo = new Repository();
    borrowersRepo = new Repository();
    borrowingRepo = new Repository();
    addBook() {
        const type = prompt("Loại sách (Fiction/Science/History):")?.trim();
        const title = prompt("Tiêu đề sách:");
        const price = parseFloat(prompt("Giá thuê:") || "0");
        const amount = parseInt(prompt("Số lượng:") || "1");
        let book;
        if (type === "Fiction") {
            book = new FictionBook(this.bookIdCounter++, title, price, amount);
        }
        else if (type === "Science") {
            book = new ScienceBook(this.bookIdCounter++, title, price, amount);
        }
        else {
            book = new HistoryBook(this.bookIdCounter++, title, price, amount);
        }
        this.booksRepo.add(book);
        alert("Thêm sách thành công!");
    }
    addBorrower() {
        const name = prompt("Tên người mượn:");
        const email = prompt("Email:");
        const phone = prompt("Số điện thoại:");
        const person = new Person(this.borrowerIdCounter++, name, email, phone);
        this.borrowersRepo.add(person);
        alert("Thêm người mượn thành công!");
        return person;
    }
    borrowBook() {
        const bookId = parseInt(prompt("Nhập ID sách muốn mượn:") || "0");
        const borrowerId = parseInt(prompt("Nhập ID người mượn:") || "0");
        const days = parseInt(prompt("Số ngày mượn:") || "1");
        const book = this.booksRepo.getAll().find((b) => b.getBookId() === bookId);
        const borrower = this.borrowersRepo
            .getAll()
            .find((b) => b.getId() === borrowerId);
        if (book && borrower && book.isAvailable) {
            book.borrowBook();
            const cost = book.price * days;
            const borrowing = new Borrowing(this.transactionIdCounter++, borrower, book, days, cost);
            this.borrowingRepo.add(borrowing);
            alert("Mượn sách thành công!");
        }
        else {
            alert("Không tìm thấy sách hoặc người mượn, hoặc sách đã hết.");
        }
    }
    returnBook() {
        const bookId = parseInt(prompt("Nhập ID sách trả:") || "0");
        const daysLate = parseInt(prompt("Số ngày trễ:") || "0");
        const book = this.booksRepo.getAll().find((b) => b.getBookId() === bookId);
        if (book) {
            book.returnBook();
            const lateFee = book.calculateLateFee(daysLate);
            alert(`Đã trả sách. Phí trễ là: ${lateFee.toLocaleString()} VND`);
        }
        else {
            alert("Không tìm thấy sách.");
        }
    }
    listAvailableBooks() {
        const availableBooks = this.booksRepo.getAll().filter((b) => b.isAvailable);
        if (availableBooks.length === 0) {
            alert("Không có sách nào có thể mượn.");
            return;
        }
        alert("📚 Danh sách sách có thể mượn:\n" +
            availableBooks
                .map((b) => `- ${b.getTitle()} (ID: ${b.getBookId()})`)
                .join("\n"));
    }
    listBorrowingByCustomer() {
        const id = parseInt(prompt("Nhập ID người mượn:") || "0");
        const list = this.borrowingRepo
            .getAll()
            .filter((b) => b.borrower.getId() === id);
        if (list.length === 0) {
            alert("Người này chưa mượn sách nào.");
            return;
        }
        alert(list
            .map((b) => `Mã GD: ${b.transactionId}, Sách: ${b.book.getTitle()}, Ngày mượn: ${b.days}, Tổng tiền: ${b.totalCost}`)
            .join("\n"));
    }
    calculateTotalRevenue() {
        return this.borrowingRepo.getAll().reduce((sum, b) => sum + b.totalCost, 0);
    }
    countBooksByType() {
        const grouped = this.booksRepo
            .getAll()
            .reduce((acc, b) => {
            acc[b.type] = (acc[b.type] || 0) + 1;
            return acc;
        }, {});
        if (Object.keys(grouped).length === 0) {
            alert("Chưa có sách nào.");
            return;
        }
        alert("📊 Số lượng sách theo thể loại:\n" +
            Object.entries(grouped)
                .map(([type, count]) => `${type}: ${count} sách`)
                .join("\n"));
    }
    showAllBorrowers() {
        const all = this.borrowersRepo.getAll();
        if (all.length === 0) {
            alert("Chưa có người mượn nào.");
            return;
        }
        alert(all.map((b) => `ID: ${b.getId()}, Name: ${b.getName()}`).join("\n"));
    }
}
const manager = new LibraryManager();
function menu() {
    while (true) {
        const choice = prompt(`------ THƯ VIỆN ------
1. Thêm người mượn
2. Thêm sách
3. Cho mượn sách
4. Hiển thị người mượn
5. Trả sách
6. Danh sách sách có thể mượn
7. Danh sách sách đã mượn bởi người
8. Tổng doanh thu
9. Đếm sách theo thể loại
0. Thoát
Chọn chức năng:`);
        switch (choice) {
            case "1":
                manager.addBorrower();
                break;
            case "2":
                manager.addBook();
                break;
            case "3":
                manager.borrowBook();
                break;
            case "4":
                manager.showAllBorrowers();
                break;
            case "5":
                manager.returnBook();
                break;
            case "6":
                manager.listAvailableBooks();
                break;
            case "7":
                manager.listBorrowingByCustomer();
                break;
            case "8":
                alert(`Tổng doanh thu: ${manager
                    .calculateTotalRevenue()
                    .toLocaleString()} VND`);
                break;
            case "9":
                manager.countBooksByType();
                break;
            case "0":
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}
menu();
export {};
