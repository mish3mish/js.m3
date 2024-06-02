function calAverage () {
    let sum = 0;
    for(i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(calAverage(1, 2, 3, 4));
console.log(calAverage(14, 8, 2));
console.log(calAverage(27, 43, 2, 8, 36));