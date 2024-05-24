const values = '8 11';

function calculateSquare(values) {
    const valuesNumbers = values.split(' ');
    const width = valuesNumbers[0];
    const height = valuesNumbers[1]
    return width * height;
}

const res = calculateSquare(values);
console.log(res);