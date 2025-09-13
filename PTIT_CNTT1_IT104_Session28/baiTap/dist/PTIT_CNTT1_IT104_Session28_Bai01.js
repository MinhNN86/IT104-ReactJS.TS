function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum);
}
const callback = (sum) => {
    console.log("Kết quả phép tính là: ", sum);
};
// Gọi hàm để kiểm tra
calculate(5, 7, callback);
export {};
