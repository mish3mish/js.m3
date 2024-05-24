const string = 'Welcome to the future'; 

function printMiddleWords (str) {
    const trimmedStr = str.trim();
    const arrayStr = trimmedStr.split(' ');
    const start = 1;
    const end = arrayStr.length - 1;
    for (const word of arrayStr.slice(start, end)) {
        console.log(word);
        
    }

}




printMiddleWords(string);