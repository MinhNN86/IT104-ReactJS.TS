function convertToNumber(value: number | string): number | null {
  const num = typeof value === "string" ? Number(value) : value;
  return isNaN(num) ? null : num;
}

function cong(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB === null) return "Tham số không hợp lệ";
  return numA + numB;
}

function tru(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB == null) return "Tham số không hợp lệ";
  return numA - numB;
}

function nhan(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB == null) return "Tham số không hợp lệ";
  return numA * numB;
}

function chia(a: number | string, b: number | string): number | string {
  const numA = convertToNumber(a);
  const numB = convertToNumber(b);

  if (numA === null || numB == null) return "Tham số không hợp lệ";
  if (numB === 0) return "Không thể chia cho 0";
  return numA / numB;
}

console.log("Cộng:", cong("10", 5));
console.log("Trừ:", tru("20", "3"));
console.log("Nhân:", nhan(4, "2"));
console.log("Chia:", chia("100", "25"));
console.log("Sai kiểu:", cong("abc", 5));
console.log("Chia cho 0:", chia(10, 0));
