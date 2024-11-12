// Kamus konversi huruf ke angka
const kamus = {
"0" : ["A", "v", "w", "x", "y", "z", " "],
"1" : ["B", "C", "D", "u"],
"2" : ["E", "p", "q", "r", "s", "t"],
"3" : ["F", "G", "H", "o"],
"4" : ["I", "j", "k", "l", "m", "n"],
"5" : ["J", "K", "L", "M", "N", "i"],
"6" : ["O", "f", "g", "h"],
"7" : ["P", "Q", "R", "S", "T", "e"],
"8" : ["U", "b", "c", "d"],
"9" : ["V", "W", "X", "Y", "Z", "a"],
};

function convertText() {
    const inputText = document.getElementById("inputText").value;
    let outputNumber = "";

    for (let char of inputText) {
        let found = false;
        
        for (let key in kamus) {
            if (kamus[key].includes(char)) {
                outputNumber += key + " ";
                found = true;
                break;
            }
        }
   
        if (!found) {
            outputNumber += "";
        }
    }

    document.getElementById("outputNumber").innerText = outputNumber.trim();
}

function calculateConvertText() {
    const inputText = document.getElementById("outputNumber").innerText;
    let arrayText = inputText.split(" ")
    let total = 0;
    for (let i = 0; i < arrayText.length; i++) {
        arrayText[i] = parseInt(arrayText[i]);
        if (i === 0) {
            total = arrayText[i];
        } else {
            if (i % 2 === 0) {
                total -= arrayText[i];
            }
            else {
                total += arrayText[i];
            }
        }
    }
    document.getElementById("outputCalculate").innerText = total;
}

function convertToAbjad() {
    const inputText = document.getElementById("outputCalculate").innerText;
    let inputInt = parseInt(inputText);
    if (inputInt < 0) {
        inputInt = inputInt * -1;
    }
    let sum = 0;

    let arrayNumber = [];
    let arrayAbjad = [];
    for (let i = 0; i < inputInt; i++) {
        // console.log(sum);
        if (sum < inputInt) {
            if (sum + i > inputInt) {
                i = 0
                arrayNumber.push(i);
                arrayAbjad.push(kamus[i][0]);
            } else if (sum + i < inputInt) {
                sum += i;
                arrayNumber.push(i);
                arrayAbjad.push(kamus[i][0]);
            } else {
                sum += i;
                arrayNumber.push(i);
                arrayAbjad.push(kamus[i][0]);
                break;
            }
        }
    }
    // console.log(arrayNumber);
    document.getElementById("outputConvertToAbjad").innerText = arrayAbjad.join(" ");
}

function convertBack() {
    const inputText = document.getElementById("outputConvertToAbjad").innerText;
    let outputNumber = "";

    let inputArray = inputText.split(" ");
    let sum = 0;
    for (let char of inputArray) {
        let found = false;
        for (let key in kamus) {
            if (kamus[key].includes(char)) {
                outputNumber += key + " ";
                sum += parseInt(key);
                found = true;
                break;
            }
        }
        if (!found) {
            outputNumber += "";
        }
    }
    outputNumber = outputNumber.trim();
    let arrayOutput = outputNumber.split(" ");
    let arrayOutputModify = [];

    for (let i = 0; i < arrayOutput.length; i++) {
        if (i == arrayOutput.length - 1 || i == arrayOutput.length - 2) {
            arrayOutputModify.push(parseInt(arrayOutput[i]) + 1);
        }
        else {
            arrayOutputModify.push(parseInt(arrayOutput[i]));
        }
    }
    
    let hasilAbjad = arrayOutputModify.map((num) => numberToAbjad(num));
    document.getElementById("outputConvertBack").innerText = hasilAbjad.join(" ");
}

function numberToAbjad(number) {
    return kamus[number.toString()][0];
}

function convertBackModifyToNumber() {
    const inputText = document.getElementById("outputConvertBack").innerText;
    let outputNumber = "";

    let inputArray = inputText.split(" ");
    for (let char of inputArray) {
        let found = false;
        console.log(char);
        for (let key in kamus) {
            if (kamus[key].includes(char)) {
                outputNumber += key + " ";
                found = true;
                break;
            }
        }
   
        if (!found) {
            outputNumber += "";
        }
    }

    outputNumber = outputNumber.trim();
    let arrayOutput = outputNumber.split(" ");
    let arrayOutputModify = [];

    for (let i = 0; i < arrayOutput.length; i++) {
        if (parseInt(arrayOutput[i]) % 2 == 0 || parseInt(arrayOutput[i] == 0)) {
            arrayOutputModify.push(parseInt(arrayOutput[i]) + 1);
        }
        else {
            arrayOutputModify.push(parseInt(arrayOutput[i]));
        }
    }

    document.getElementById("outputConvertBackModifyToNumber").innerText = arrayOutputModify.join(" ");
    
}


function dictionaryTest() {
    convertText();
    calculateConvertText();
    convertToAbjad();
    convertBack();
    convertBackModifyToNumber();
}
