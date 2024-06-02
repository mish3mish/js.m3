function logItems() {
    for (let i=0; i < arguments.length; i++) {
        console.log(`${i+1} - ${arguments[i]}`);
    }
}

logItems('Mango', 'Poly', 'Ajax');