// Assignment Code
let generateBtn = document.querySelector("#generate");
let lwrcaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upprcaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbrChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let spclChar = ["!", "”", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

let allOptions = []


// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    let lowercase = window.confirm("Should the password include lowercase characters?");
    let uppercase = window.confirm("Should the password include uppercase characters?");
    let numeric = window.confirm("Should the password include numeric characters?");
    let special = window.confirm("Should the password include special characters?");
    allOptions = []

    // console.log("lower prompt " + lowercase)
    // console.log("upper prompt " + uppercase)
    // console.log("numeric prompt " + numeric)
    // console.log("special prompt " + special)
  
    if (lowercase) {
        allOptions.push(lwrcaseChar)
        //  allOptions.concat(lwrcaseChar)
        console.log("lowercase ", allOptions, lwrcaseChar)
    }
         
    if (uppercase) {
        allOptions.push(upprcaseChar)
        console.log("upper ", allOptions)
    }

    if (numeric) {
        allOptions.push(numbrChar)
        console.log("number ", allOptions)
    }

    if (special) {
        allOptions.push(spclChar)
        console.log("special ", allOptions)
    }

    console.log(allOptions)
    
    if (allOptions.length === 0) {
        return "At least one set of characters must be chosen"
    }
                
    let lengthNeed = window.prompt("How many characters should the password be? Min 8 Max 128")
    
    lengthNeed = parseInt(lengthNeed)
    
    let password = ""
    
    if (lengthNeed >= 8 && lengthNeed <= 128) {
    
        for (let i = 0; i < lengthNeed; i++) {
            let row = Math.floor(Math.random() * allOptions.length)
            let passwordFrame = Math.floor(Math.random() * allOptions[row].length)
            // console.log(passwordFrame)
            let finalResult = allOptions[row][passwordFrame];
            password += finalResult;
           // console.log(password)
        }
        return password

    } else {
        return "Needs a Min of 8 and a max of 128"
    }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// steps
//character types
    // confirm()1 - lowercase
    // confirm()2 - uppercase
    // confirm()3 - numeric
    // confirm()4 - special chars
// prompt 1 - length of characters
    // prompt() - text box let them fill out number of chars
// generate password
// display password