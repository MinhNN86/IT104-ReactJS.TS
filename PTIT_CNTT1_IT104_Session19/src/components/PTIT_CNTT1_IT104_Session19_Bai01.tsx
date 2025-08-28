import { useMemo } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cartItems: CartItem[] = [
  { id: 1, name: "Sản phẩm A", price: 10000, quantity: 2 },
  { id: 2, name: "Sản phẩm B", price: 20000, quantity: 1 },
];

export default function PTIT_CNTT1_IT104_Session19_Bai01() {
  const total = useMemo(() => {
    return cartItems.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);
  }, [cartItems]);

  return (
    <div style={{ maxWidth: 500, margin: "20px auto" }}>
      <h3>Giỏ hàng</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>Tên sản phẩm</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Giá</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Số lượng</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString("vi-VN")} ₫</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toLocaleString("vi-VN")} ₫</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 style={{ marginTop: "20px", textAlign: "right" }}>
        Tổng: {total.toLocaleString("vi-VN")} ₫
      </h4>
    </div>
  );
}
