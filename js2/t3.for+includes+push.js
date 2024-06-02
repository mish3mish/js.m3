function checkStorage(storage, item) {
    const normalizedItem = item.toLowerCase();
    let normalizedStorage = [];
    for (let i = 0; i < storage.length; i++) {
        normalizedStorage.push(storage[i].toLowerCase());
    }

    if(normalizedStorage.includes(normalizedItem)) {
        return `${normalizedItem} is available to order`;
    } else {
        return 'Sorry! We are out of stock!';
    }
}

console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
