const processInput = (input) => {
    if (typeof input === "string") {
        const num = Number(input);
        if (!Number.isNaN(num)) {
            console.log(num * num);
        }
        else {
            const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        const isPrime = (n) => {
            if (n < 2)
                return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0)
                    return false;
            }
            return true;
        };
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
};
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
export {};
