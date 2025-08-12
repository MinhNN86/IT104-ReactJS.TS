class MenuItem {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    id;
    capacity;
    available;
    constructor(id, capacity, available) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    id;
    customerName;
    tableId;
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    id;
    tableId;
    items;
    constructor(id, tableId, items) {
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((totalPrice, current) => {
            return totalPrice + current.price;
        }, 0);
    }
}
class Restaurant {
    menu;
    tables;
    reservations;
    orders;
    constructor(menu = [], tables = [], reservations = [], orders = []) {
        this.menu = menu;
        this.tables = tables;
        this.reservations = reservations;
        this.orders = orders;
    }
    addMenuItem(item) {
        if (this.menu.some((m) => m.id === item.id)) {
            console.log("ID món ăn đã tồn tại");
        }
        else {
            this.menu.push(item);
            console.log("Thêm món ăn thành công");
        }
    }
    addTable(table) {
        if (this.tables.some((t) => t.id === table.id)) {
            console.log("ID bàn đã tồn tại");
        }
        else {
            this.tables.push(table);
            console.log("Thêm bàn thành công");
        }
    }
    makeReservation(customerName, tableId) {
        let table = this.tables.find((table) => table.id === tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                const newId = this.reservations.length + 1;
                const reservation = new Reservation(newId, customerName, tableId);
                this.reservations.push(reservation);
            }
            else {
                console.log("Bàn này đã có người đặt");
            }
        }
        else {
            console.log("Không tìm thấy bàn");
        }
    }
    placeOrder(tableId, items) {
        const table = this.tables.find((t) => t.id === tableId);
        if (!table) {
            console.log("Không tìm thấy bàn");
            return;
        }
        if (table.available) {
            console.log("Bàn chưa được đặt");
            return;
        }
        if (!items.length) {
            console.log("Đơn hàng trống");
            return;
        }
        for (const it of items) {
            if (!this.menu.some((m) => m.id === it.id)) {
                console.log(`Món id=${it.id} không có trong menu`);
                return;
            }
        }
        const idOrder = this.orders.length + 1;
        const order = new Order(idOrder, tableId, items);
        this.orders.push(order);
        console.log(`Tạo order #${order.id} cho bàn ${tableId}`);
    }
    generateBill(tableId) {
        const table = this.tables.find((t) => t.id === tableId);
        if (table) {
            const order = this.orders.find((order) => order.tableId === tableId);
            if (order) {
                const totalBill = order.getTotal();
                console.log(`Tổng tiền bàn #${tableId}: ${totalBill}`);
                table.available = true;
            }
            else {
                console.log("Không tìm thấy hoá đơn");
            }
        }
        else {
            console.log("Không tìm thấy bàn");
        }
    }
}
const r = new Restaurant();
r.addMenuItem(new MenuItem(1, "Phở bò", 45000));
r.addMenuItem(new MenuItem(2, "Bún chả", 40000));
r.addMenuItem(new MenuItem(3, "Trà đá", 5000));
r.addTable(new Table(1, 2, true));
r.addTable(new Table(2, 4, true));
r.makeReservation("Anh A", 1);
r.placeOrder(1, [
    new MenuItem(1, "Phở bò", 45000),
    new MenuItem(3, "Trà đá", 5000),
]);
r.placeOrder(1, [new MenuItem(2, "Bún chả", 40000)]);
r.placeOrder(2, [new MenuItem(1, "Phở bò", 45000)]);
r.generateBill(1);
r.makeReservation("Chị B", 1);
export {};
