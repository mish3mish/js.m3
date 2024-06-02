function getCommonElements(array1, array2) {
    let neededNumbers = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
        neededNumbers.push(array1[i]);
        }
    
        
    }
    return neededNumbers;
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
