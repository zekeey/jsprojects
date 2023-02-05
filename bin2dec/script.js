const prompt = require('prompt-sync') ();

let convertedBin = 0; 
// get input from user
function getInput () {
    const INPUT = prompt("Enter binary to be converted to decimal: ");
    return INPUT;
}

// Iterate through BIN_Array using conversion formula
function convertInput () {
    const bin = getInput();
    let convertedBin = parseInt(bin, 2);
    console.log(`Binary converted to decimal: ${convertedBin}`);
}

convertInput();