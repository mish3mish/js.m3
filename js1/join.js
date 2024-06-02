function getLength(array) {
    const words = array.join("");
    return words.length;
}

console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
console.log(getLength(["M", "a", "n", "g", "o"]));
console.log(getLength(["top", "picks", "for", "you"]));