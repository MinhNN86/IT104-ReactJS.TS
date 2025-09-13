type Callback = (result: number) => void;

function calculate(a: number, b: number, callback: Callback): void {
  const sum: number = a + b;
  callback(sum);
}

const callback = (sum: number) => {
  console.log("Kết quả phép tính là: ", sum);
};

// Gọi hàm để kiểm tra
calculate(5, 7, callback);
