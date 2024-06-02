const values = [2, 17, 94, 1, 23, 37];
let min;

function findMinimum(array) {
    let min = array[0];
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (min < element) {
            continue;
        } else {
            min = element;
        }
    }
return min;
}

console.log(findMinimum(values));

