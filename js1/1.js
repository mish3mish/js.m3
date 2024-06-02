function getExtremeElements(array) {
    const firstElement = array[0];
    const lastIndex = array.length -1;
    const lastElement = array[lastIndex];
    return [firstElement, lastElement];
}



console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));  