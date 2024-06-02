function calculateTotalPrice(order) {
    let total = 0;
    for (i = 0; i < order.length; i++) {
      total += order[i];
  }
    return total;
  }

  calculateTotalPrice([12, 85, 37, 4]);