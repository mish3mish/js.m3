function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const doubleDigitHours = String(hours).padStart(2, 0);
    const doubleDigitMinutes = String(minutes).padStart(2, 0);


    return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70));
console.log(formatTime(450));
console.log(formatTime(1441));
