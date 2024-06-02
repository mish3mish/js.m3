function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const price = words.length * pricePerWord;
    return price;
  }

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 80));