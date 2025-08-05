let firstName: string = "nguyễn";
let lastName: string = "Minh";

function capitalize(word: string): string {
  if (word.length === 0) return "";
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

firstName = capitalize(firstName);
lastName = capitalize(lastName);

let fullName: string = firstName + " " + lastName;

console.log("Họ và tên: ", fullName);
