class Product {
    static idCounter = 1;
    id;
    name;
    price;
    stock;
    constructor(name, price, stock) {
        this.id = Product.idCounter++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (quantity > 0 && quantity <= this.stock) {
            this.stock -= quantity;
        }
        else {
            console.log("Số lượng bán không hợp lệ");
        }
    }
    restock(quantity) {
        if (quantity < 0) {
            console.log("Số lượng nhập vào không hợp lệ");
        }
        else {
            this.stock += quantity;
        }
    }
}
class ElectronicsProduct extends Product {
    warrantyPeriod;
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `
      Electronics - ${this.name}
      Price: ${this.price}
      Stock: ${this.stock}
      Bảo hành: ${this.warrantyPeriod} tháng
      --------------------------------------
      `;
    }
    getShippingConst(distance) {
        return 50000;
    }
    getCategory() {
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    size;
    color;
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `
      Clothing - ${this.name}
      Size: ${this.size} - Color: ${this.color}
      Price: ${this.price}
      Stock: ${this.stock}
      --------------------------------------
      `;
    }
    getShippingConst(distance) {
        return 25000;
    }
    getCategory() {
        return "Clothing";
    }
}
class Customer {
    static idCounter = 1;
    id;
    name;
    email;
    shippingAddress;
    constructor(name, email, shippingAddress) {
        this.id = Customer.idCounter++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `
    Customer #${this.id}
    Name: ${this.name}
    Email: ${this.email}
    ShippingAddress: ${this.shippingAddress}
    `;
    }
}
class Order {
    static idCounter = 1;
    orderId;
    customer;
    products;
    totalAmount;
    constructor(customer, products) {
        this.orderId = Order.idCounter++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.products.reduce((total, cur) => total + cur.product.price * cur.quantity, 0);
    }
    getDetails() {
        const productDetail = this.products
            .map((product) => `- Name: ${product.product.name}: ${product.product.price} x ${product.quantity} (${product.product.getCategory()}) `)
            .join("\n");
        return `
      OrderId #${this.orderId}
      Customer: ${this.customer.name}
      Product: 
      ${productDetail}
      Total: ${this.totalAmount.toLocaleString()} VND
      `;
    }
}
class Store {
    products = [];
    customers = [];
    orders = [];
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(name, email, address) {
        const customer = new Customer(name, email, address);
        this.customers.push(customer);
    }
    createOrder(customerId, productQuantities) {
        const customer = this.customers.find((customer) => customer.id === customerId);
        if (!customer)
            return null;
        const orderProduct = [];
        for (const currentProduct of productQuantities) {
            const product = this.products.find((product) => product.id === currentProduct.productId);
            if (!product || product.stock < currentProduct.quantity) {
                console.log("Không đủ hàng hoặc không tìm thấy sản phẩm");
                return null;
            }
            orderProduct.push({ product, quantity: currentProduct.quantity });
        }
        orderProduct.forEach((curProduct) => curProduct.product.sell(curProduct.quantity));
        const order = new Order(customer, orderProduct);
        this.orders.push(order);
        return order;
    }
    cancelOrder(orderId) {
        let order = this.orders.find((order) => order.orderId === orderId);
        if (!order) {
            console.log("Không tìm thấy order");
            return;
        }
        order.products.forEach((product) => product.product.restock(product.quantity));
        this.orders = this.orders.filter((order) => order.orderId !== orderId);
    }
    listAvailableProducts() {
        let availableProducts = this.products.filter((product) => product.stock > 0);
        if (availableProducts.length === 0) {
            console.log("Không còn sản phẩm nào");
            return;
        }
        availableProducts.forEach((p) => console.log(p.getProductInfo(), "\n"));
    }
    listCustomerOrders(customerId) {
        const listOrder = this.orders.filter((order) => order.customer.id === customerId);
        if (listOrder.length === 0) {
            console.log("Không có đơn hàng nào");
        }
        else {
            listOrder.forEach((order) => console.log(order.getDetails(), "\n"));
        }
    }
    calculateTotalRevenue() {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    countProductsByCategory() {
        let categoryCount = {
            Electronics: 0,
            Clothing: 0,
        };
        const count = this.products.reduce((acc, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, categoryCount);
        console.log(`
      Electronics Product: ${count.Electronics};
      Clothing Product: ${count.Clothing};
      `);
    }
    updateProductStock(productId, newStock) {
        const index = this.products.findIndex((product) => product.id === productId);
        if (index === -1) {
            console.log("Không tìm thấy sản phẩm");
        }
        else {
            this.products[index].stock = newStock;
        }
    }
    findEntityById(collection, id) {
        return collection.find((item) => item.id === id);
    }
}
// ====== KHỞI TẠO STORE ======
const store = new Store();
// ====== DỮ LIỆU MẪU (có thể xóa) ======
store.addCustomer("Nguyễn Văn A", "a@gmail.com", "Hà Nội");
store.addCustomer("Trần Thị B", "b@gmail.com", "HCM");
store.addProduct(new ElectronicsProduct("Laptop Lenovo", 20000000, 5, 24));
store.addProduct(new ElectronicsProduct("Xiaomi 13", 12000000, 8, 12));
store.addProduct(new ClothingProduct("Áo thun", 200000, 20, "L", "Đen"));
store.addProduct(new ClothingProduct("Váy nữ", 350000, 10, "M", "Hồng"));
// ====== MENU PROMPT ======
function mainMenu() {
    let running = true;
    while (running) {
        const choice = prompt(`------ MENU CHỨC NĂNG ------
1) Thêm khách hàng mới
2) Thêm sản phẩm mới (Điện tử / Quần áo)
3) Tạo đơn hàng mới
4) Hủy đơn hàng
5) Hiển thị sản phẩm còn hàng
6) Hiển thị đơn hàng của một khách hàng
7) Tính & hiển thị tổng doanh thu
8) Thống kê sản phẩm theo danh mục
9) Cập nhật tồn kho cho một sản phẩm
10) Tìm kiếm theo ID (Customer/Product)
11) Xem thông tin chi tiết sản phẩm
0) Thoát
→ Nhập số lựa chọn:`);
        if (choice === null)
            break; // đóng prompt = thoát
        switch (choice.trim()) {
            case "1":
                addCustomerMenu();
                break;
            case "2":
                addProductMenu();
                break;
            case "3":
                createOrderMenu();
                break;
            case "4":
                cancelOrderMenu();
                break;
            case "5":
                showAvailableProductsMenu();
                break;
            case "6":
                listCustomerOrdersMenu();
                break;
            case "7":
                alert("Tổng doanh thu: " +
                    store.calculateTotalRevenue().toLocaleString() +
                    " VND");
                break;
            case "8":
                countByCategoryMenu();
                break;
            case "9":
                updateStockMenu();
                break;
            case "10":
                searchByIdMenu();
                break;
            case "11":
                showProductInfoMenu();
                break;
            case "0":
                running = false;
                alert("Đã thoát.");
                break;
            default:
                alert("Lựa chọn không hợp lệ, thử lại!");
                break;
        }
    }
}
// ====== CÁC HÀM PHỤ CHO TỪNG MỤC ======
function addCustomerMenu() {
    const name = prompt("Tên khách hàng:");
    const email = prompt("Email:");
    const addr = prompt("Địa chỉ giao hàng:");
    if (!name || !email || !addr)
        return alert("Thiếu thông tin!");
    store.addCustomer(name, email, addr);
    alert("Đã thêm khách hàng.");
}
function addProductMenu() {
    const type = prompt("Loại sản phẩm:\n1) Electronics\n2) Clothing");
    const name = prompt("Tên sản phẩm:");
    const price = Number(prompt("Giá:"));
    const stock = Number(prompt("Tồn kho:"));
    if (!name || isNaN(price) || isNaN(stock))
        return alert("Dữ liệu không hợp lệ!");
    if (type === "1") {
        const warranty = Number(prompt("Bảo hành (tháng):"));
        store.addProduct(new ElectronicsProduct(name, price, stock, warranty));
        alert("Đã thêm sản phẩm điện tử.");
    }
    else if (type === "2") {
        const size = prompt("Size:");
        const color = prompt("Màu:");
        store.addProduct(new ClothingProduct(name, price, stock, size || "", color || ""));
        alert("Đã thêm sản phẩm quần áo.");
    }
    else {
        alert("Loại không hợp lệ.");
    }
}
function createOrderMenu() {
    if (store.customers.length === 0 || store.products.length === 0)
        return alert("Chưa có khách hàng hoặc sản phẩm.");
    const clist = store.customers.map((c) => `(${c.id}) ${c.name}`).join(" | ");
    const customerId = Number(prompt("Chọn ID khách hàng:\n" + clist));
    const customer = store.findEntityById(store.customers, customerId);
    if (!customer)
        return alert("Không tìm thấy khách hàng!");
    const productQuantities = [];
    let more = true;
    while (more) {
        const plist = store.products
            .map((p) => `(${p.id}) ${p.name} [SL: ${p.stock}]`)
            .join(" | ");
        const pid = Number(prompt("Chọn ID sản phẩm:\n" + plist));
        const qty = Number(prompt("Nhập số lượng:"));
        if (isNaN(pid) || isNaN(qty) || qty <= 0) {
            alert("Dữ liệu không hợp lệ, bỏ qua.");
        }
        else {
            productQuantities.push({ productId: pid, quantity: qty });
        }
        more = confirm("Thêm sản phẩm khác?");
    }
    if (productQuantities.length === 0)
        return alert("Đơn hàng trống.");
    const order = store.createOrder(customerId, productQuantities);
    if (!order)
        return alert("Tạo đơn thất bại (không tìm thấy sp hoặc thiếu hàng).");
    alert(order.getDetails());
}
function cancelOrderMenu() {
    if (store.orders.length === 0)
        return alert("Chưa có đơn hàng nào.");
    const olist = store.orders
        .map((o) => `(#${o.orderId}) của ${o.customer.name}`)
        .join(" | ");
    const oid = Number(prompt("Nhập ID đơn cần hủy:\n" + olist));
    store.cancelOrder(oid);
    alert("Đã hủy (nếu tồn tại).");
}
function showAvailableProductsMenu() {
    const available = store.products.filter((p) => p.stock > 0);
    if (available.length === 0)
        return alert("Không còn sản phẩm nào trong kho.");
    alert(available.map((p) => p.getProductInfo()).join("\n"));
}
function listCustomerOrdersMenu() {
    if (store.customers.length === 0)
        return alert("Chưa có khách hàng.");
    const clist = store.customers.map((c) => `(${c.id}) ${c.name}`).join(" | ");
    const id = Number(prompt("Chọn ID khách hàng:\n" + clist));
    const orders = store.orders.filter((o) => o.customer.id === id);
    if (orders.length === 0)
        return alert("Khách hàng này chưa có đơn hàng.");
    alert(orders.map((o) => o.getDetails()).join("\n\n"));
}
function countByCategoryMenu() {
    // Đếm ngay tại menu để chủ động alert (không dựa vào console.log trong Store)
    const counts = store.products.reduce((acc, p) => {
        const cat = p.getCategory();
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
    }, {});
    alert(`Electronics Product: ${counts.Electronics || 0}\nClothing Product: ${counts.Clothing || 0}`);
}
function updateStockMenu() {
    if (store.products.length === 0)
        return alert("Chưa có sản phẩm.");
    const plist = store.products
        .map((p) => `(${p.id}) ${p.name} [SL: ${p.stock}]`)
        .join(" | ");
    const pid = Number(prompt("Nhập ID sản phẩm cần cập nhật:\n" + plist));
    const newStock = Number(prompt("Nhập tồn kho mới:"));
    if (isNaN(newStock))
        return alert("Tồn kho mới không hợp lệ.");
    store.updateProductStock(pid, newStock);
    alert("Đã cập nhật (nếu sản phẩm tồn tại).");
}
function searchByIdMenu() {
    const type = prompt("Tìm theo:\n1) Khách hàng\n2) Sản phẩm");
    const id = Number(prompt("Nhập ID cần tìm:"));
    if (type === "1") {
        const c = store.findEntityById(store.customers, id);
        alert(c ? c.getDetails() : "Không tìm thấy khách hàng.");
    }
    else if (type === "2") {
        const p = store.findEntityById(store.products, id);
        alert(p ? p.getProductInfo() : "Không tìm thấy sản phẩm.");
    }
    else {
        alert("Loại không hợp lệ.");
    }
}
function showProductInfoMenu() {
    if (store.products.length === 0)
        return alert("Chưa có sản phẩm.");
    const plist = store.products.map((p) => `(${p.id}) ${p.name}`).join(" | ");
    const pid = Number(prompt("Nhập ID sản phẩm:\n" + plist));
    const p = store.findEntityById(store.products, pid);
    alert(p ? p.getProductInfo() : "Không tìm thấy sản phẩm.");
}
// ====== CHẠY MENU ======
mainMenu();
export {};
