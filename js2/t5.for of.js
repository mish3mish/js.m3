function calculateTotalPrice(order) {
    let total = 0;
    for (const price of order) {
        total += price;
        
    }
    return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));