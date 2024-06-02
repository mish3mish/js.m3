const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

const friendsLength = friends.length;

for (let index = 0; index < friendsLength; index++) {
    const tableCell = `| ${index}: | ${friends[index]}`;
    console.log(tableCell);
    
}