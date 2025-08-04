let fullname: string;
fullname = "Demo";
// console.log(fullname);

// ENUM
enum Direction {
  up = "UP",
  down = "DOWN",
  right = "RIGHT",
  left = "LEFT",
}

// Void (Hàm không trả về giá trị hoặc không có giá trị trả về)
function sum(a: number, b: number): void {
  console.log(a + b);
}

// sum(1, 2);

// NEVER ( hàm hoặc biểu thức không bao giờ hoàn thành)
// 1. Hàm ném lỗi ( throw error )
// 2. Hàm có vòng lặp vô hạn
function infiniteLopp(): never {
  while (true) {
    // Vòng lặp vô hạn
  }
}

// ANY & UNKNOWN
let a: any = 5; // Gán lại được kiểu giá trị khác
console.log(a);
a = "Demo";
console.log(a);

let input: unknown = "HELLO";
// Unkown phải kiểm tra kiểu giá trị trước khi thực hiện logic
if (typeof input === "string") {
  console.log(input.toLowerCase());
}
