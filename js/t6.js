const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,890011122233,890055566377,89004456932';

function showPhoneNumbers (namesString, phonesString) {
    const namesArray = namesString.split(',');
    const phonesArray = phonesString.split(',');
for (let index = 0; index < namesArray.length; index++) {
    const name = namesArray[index];
    const phone = phonesArray[index];
    console.log(`${name} has this phone number: ${phone} `)
}
}

showPhoneNumbers(names, phones);