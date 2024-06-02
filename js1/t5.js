const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

function sumEvenNumbers(params) {
    let total = 0;
    for (param of params) {
        if (param % 2 === 0) {
            total += param;
        }
    }
    return total;
}

console.log(sumEvenNumbers(numbers));