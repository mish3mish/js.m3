function createReversedArray() {
    const argsArray = Array.from(arguments);
    const reversedArgsArray = argsArray.reverse();
    return reversedArgsArray;
}
    


console.log(createReversedArray(12, 85, 37, 4));
