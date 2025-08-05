let num1 = 20;
let num2 = 5;
let num3;
let num4 = "10";
let num5 = true;
num3 = num1 + num2;
console.log(`Cộng: ${num1} + ${num2} = ${num3}`);
num3 = num1 - num2;
console.log(`Trừ: ${num1} - ${num2} = ${num3}`);
num3 = num1 * num2;
console.log(`Nhân: ${num1} - ${num2} = ${num3}`);
num3 = num1 / num2;
console.log(`Chia: ${num1} / ${num2} = ${num3}`);
let result = num4 + num5;
console.log(`Cộng chuỗi và boolean: ${num4} + ${num5} = ${result}`);
export {};
// Khi cộng chuỗi với giá trị boolean thì JS/TS sẽ ép kiểu tự động
// Boolean true => chuyển thành chuỗi "true"
// Sau đó nối chuỗi
