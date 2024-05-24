const fruits = ['apple', 'grapes', 'peach', 'banana', 'lemon'];

function printFruitsToConsole(array) {
 for (let index = 0; index < array.length; index++) {
     const element = array[index];
    //  console.log(index + 1, element);
    const result = `${index + 1} : ${element} `;
    console.log(result);
 }
}

printFruitsToConsole(fruits);