const calculateInvoiceTotal = (invoice) => {
    return invoice.orders.reduce((totalInvoice, order) => {
        const orderTotal = order.items.reduce((totalOrder, item) => {
            return totalOrder + item.product.price * item.quantity;
        }, 0);
        return totalInvoice + orderTotal;
    }, 0);
};
const getUnpaidOrders = (invoice) => {
    return invoice.orders.filter((order) => !order.isPaid);
};
const printInvoice = (invoice) => {
    console.log(`HOÁ ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt}`);
    console.log(`----------------------------------------`);
    invoice.orders.forEach((order) => {
        console.log(`\nĐơn hàng: #${order.orderId} - ${order.customerName}`);
        order.items.forEach((item) => {
            const line = `- ${item.product.name} × ${item.quantity} → ${item.product.price.toLocaleString("vi-VN")} VND`;
            console.log(line);
        });
        const orderTotal = order.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
        console.log(`\nTổng đơn: ${orderTotal.toLocaleString("vi-VN")} VND`);
        console.log(`\nTrạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}`);
    });
    const total = calculateInvoiceTotal(invoice);
    console.log(`\n>> Tổng cộng hóa đơn: ${total.toLocaleString("vi-VN")} VND`);
};
const invoice = {
    invoiceId: "INV001",
    createdAt: new Date("2024-05-14"),
    orders: [
        {
            orderId: "ORD001",
            customerName: "Nguyễn Văn A",
            deliveryAddress: "Hà Nội",
            isPaid: true,
            items: [
                {
                    product: {
                        id: "P001",
                        name: "Áo sơ mi",
                        price: 500000,
                    },
                    quantity: 2,
                },
                {
                    product: {
                        id: "P002",
                        name: "Quần jean",
                        price: 400000,
                    },
                    quantity: 1,
                },
            ],
        },
        {
            orderId: "ORD002",
            customerName: "Trần Thị B",
            deliveryAddress: "TP.HCM",
            isPaid: false,
            items: [
                {
                    product: {
                        id: "P003",
                        name: "Váy hoa",
                        price: 700000,
                    },
                    quantity: 1,
                    note: "size M",
                },
            ],
        },
    ],
};
printInvoice(invoice);
export {};
