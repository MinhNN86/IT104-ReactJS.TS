const calculateOrderTotal = (order) => {
    return order.items.reduce((totalPrice, items) => {
        return totalPrice + items.product.price * items.quantity;
    }, 0);
};
const printOrder = (order) => {
    console.log(`Đơn hàng: #${order.orderId}
Khách hàng: ${order.customerName}
Sản phẩm:`);
    order.items.forEach((e) => {
        console.log(`- ${e.product.name} x ${e.quantity} -> ${e.product.price * e.quantity}`);
    });
    console.log(`Tổng cộng: ${calculateOrderTotal(order)}`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
    console.log("----------------------");
};
const order1 = {
    orderId: "O001",
    customerName: "Nguyễn Văn A",
    note: "Giao hàng trước 17h",
    items: [
        {
            product: {
                readonlyId: "P001",
                name: "Áo thun",
                price: 150000,
            },
            quantity: 2,
        },
        {
            product: {
                readonlyId: "P002",
                name: "Quần jeans",
                price: 350000,
            },
            quantity: 1,
        },
    ],
};
const order2 = {
    orderId: "O002",
    customerName: "Trần Thị B",
    items: [
        {
            product: {
                readonlyId: "P003",
                name: "Giày thể thao",
                price: 1200000,
            },
            quantity: 1,
        },
        {
            product: {
                readonlyId: "P004",
                name: "Balo laptop",
                price: 500000,
            },
            quantity: 1,
        },
    ],
};
printOrder(order1);
printOrder(order2);
export {};
