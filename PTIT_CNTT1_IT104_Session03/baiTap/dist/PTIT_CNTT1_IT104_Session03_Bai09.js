function convertToNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    return b === 0 ? "Không thể chia cho 0" : a / b;
};
const power = (base, exponent) => Math.pow(base, exponent);
const sqrt = (base, root) => Math.pow(base, 1 / root);
const factorial = (n) => {
    if (n < 0 || !Number.isInteger(n)) {
        return "Giai thừa chỉ dùng cho số nguyên dương";
    }
    let result = 1;
    for (let i = 2; i <= n; i++)
        result *= i;
    return result;
};
function calculate(operator) {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultElement = document.getElementById("result");
    const num1 = convertToNumber(input1);
    const num2 = convertToNumber(input2);
    if (num1 === null || (operator !== "!" && num2 === null)) {
        resultElement.textContent = "Kết quả: Lỗi nhập số!";
        return;
    }
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "^":
            result = power(num1, num2);
            break;
        case "√":
            result = sqrt(num1, num2);
            break;
        case "!":
            result = factorial(num1);
            break;
    }
    resultElement.textContent = `Kết quả: ${result}`;
}
const buttons = document.querySelectorAll("button[data-operator]");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const operator = button.dataset.operator;
        calculate(operator);
    });
});
export {};
