function hasUniqueChars(word) {
    const charSet = new Set();
    for (const char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}
function findLongestUniqueWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (hasUniqueChars(word) && word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestUniqueWord("hello world apple banana orange pumpkin cucumber"));
export {};
