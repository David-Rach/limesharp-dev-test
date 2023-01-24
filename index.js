const vowels = ['a', 'e', 'i', 'o', 'u']

function RepeatArray(array, count) {
    let result = [];
    for (let index = 0; index < count; index++) {
        result = [...result, ...array];
    }
    console.log(result);
}

function FormatString(string) {
    let arrayOfLetters = string.split('');

    arrayOfLetters = arrayOfLetters.filter((letter) => !vowels.includes(letter.toLowerCase()));
    arrayOfLetters = arrayOfLetters.map((letter) => letter.toLowerCase());
    arrayOfLetters[0] = arrayOfLetters[0].toUpperCase();

    let result = arrayOfLetters.join('').toString();

    console.log(result);
}

function GetNextBinaryNumber(binaryArray) {
    for (let index = binaryArray.length - 1; index >= 0; index--) {
        if (binaryArray[index] === 1 && index == 0) {
            binaryArray[binaryArray.length] = 0;
            break;
        }

        if (binaryArray[index] === 1) {
            binaryArray[index] = 0;
            continue;
        }

        if (binaryArray[index] === 0) {
            binaryArray[index] = 1;
            break;
        }
    }

    console.log(binaryArray);
}

RepeatArray([1, 2, 3], 3);
FormatString("liMeSHArp DeveLoper TEST");
GetNextBinaryNumber([1, 1]);




