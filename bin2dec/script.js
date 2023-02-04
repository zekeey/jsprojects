const prompt = require('prompt-sync') ();

let convertedBin = 0; 
// get input from user
function getInput () {
    const INPUT = prompt("Enter binary to be converted to decimal: ");
    return INPUT.split('');
}

// Iterate through BIN_SUBSTRINGS array using conversion formula
function convertInput () {
    const BIN_ARRAY = getInput();
    for (let i = 0; i < BIN_ARRAY.length - 1;) {
        for(let x = BIN_ARRAY.length - 1; x > 0; x--) {
            let convertingBin = Math.round(parseInt(BIN_ARRAY[i], 2) * Math.pow(2, x));
            convertedBin += convertingBin;
            i++;
        }
    }
    console.log(`Binary converted to decimal: ${convertedBin}`);
}

convertInput();