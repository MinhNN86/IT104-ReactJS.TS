let firstName = "nguyễn";
let lastName = "Minh";
function capitalize(word) {
    if (word.length === 0)
        return "";
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
let fullName = firstName + " " + lastName;
console.log("Họ và tên: ", fullName);
export {};
