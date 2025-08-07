const handleUnionType = (input) => {
    if (typeof input === "string") {
        console.log(`${input.length} ký tự`);
    }
    else if (typeof input === "number") {
        if (input % 2 === 0) {
            console.log("Đây là số chắn");
        }
        else {
            console.log("Đây là số lẻ");
        }
    }
};
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(9);
export {};
