function convertToNumber(value: string): number | null {
  const num = Number(value);
  return isNaN(num) ? null : num;
}

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => {
  return b === 0 ? "Không thể chia cho 0" : a / b;
};

const power = (base: number, exponent: number): number =>
  Math.pow(base, exponent);
const sqrt = (base: number, root: number): number => Math.pow(base, 1 / root);

const factorial = (n: number): number | string => {
  if (n < 0 || !Number.isInteger(n)) {
    return "Giai thừa chỉ dùng cho số nguyên dương";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

function calculate(operator: string): void {
  const input1 = (document.getElementById("input1") as HTMLInputElement).value;
  const input2 = (document.getElementById("input2") as HTMLInputElement).value;
  const resultElement = document.getElementById("result") as HTMLElement;

  const num1 = convertToNumber(input1);
  const num2 = convertToNumber(input2);

  if (num1 === null || (operator !== "!" && num2 === null)) {
    resultElement.textContent = "Kết quả: Lỗi nhập số!";
    return;
  }

  let result: number | string;

  switch (operator) {
    case "+":
      result = add(num1!, num2!);
      break;
    case "-":
      result = subtract(num1!, num2!);
      break;
    case "*":
      result = multiply(num1!, num2!);
      break;
    case "/":
      result = divide(num1!, num2!);
      break;
    case "^":
      result = power(num1!, num2!);
      break;
    case "√":
      result = sqrt(num1!, num2!);
      break;
    case "!":
      result = factorial(num1!);
      break;
  }

  resultElement.textContent = `Kết quả: ${result!}`;
}

const buttons = document.querySelectorAll(
  "button[data-operator]"
) as NodeListOf<HTMLButtonElement>;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const operator = button.dataset.operator;
    calculate(operator!);
  });
});
