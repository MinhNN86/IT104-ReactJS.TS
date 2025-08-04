let fullname;
fullname = "Demo";
// console.log(fullname);
// ENUM
var Direction;
(function (Direction) {
    Direction["up"] = "UP";
    Direction["down"] = "DOWN";
    Direction["right"] = "RIGHT";
    Direction["left"] = "LEFT";
})(Direction || (Direction = {}));
// Void (Hàm không trả về giá trị hoặc không có giá trị trả về)
function sum(a, b) {
    console.log(a + b);
}
// sum(1, 2);
// NEVER ( hàm hoặc biểu thức không bao giờ hoàn thành)
// 1. Hàm ném lỗi ( throw error )
// 2. Hàm có vòng lặp vô hạn
function infiniteLopp() {
    while (true) {
        // Vòng lặp vô hạn
    }
}
// ANY & UNKNOWN
let a = 5; // Gán lại được kiểu giá trị khác
console.log(a);
a = "Demo";
console.log(a);
let input = "HELLO";
// Unkown phải kiểm tra kiểu giá trị trước khi thực hiện logic
if (typeof input === "string") {
    console.log(input.toLowerCase());
}
export {};
