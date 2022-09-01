// Assignment Code
let generateBtn = document.querySelector("#generate");
const lwrcaseChar = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upprcaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numbrChar = ["0","1","2","3","4","5","6","7","8","9"]
const spclChar = ["!","”","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","`","{","|","}","~"]



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    let charLength = window.prompt("How many characters should the password be? Min 8")
    console.log(charLength)

    if (!charLength){
        return "Nothing Selected";
    }
        if (charLength < 8){
            window.alert("C'mon have at least 8")
            generatePassword()
        }else if (charLength > 128);{
            window.alert("I doubt you could remember more than 128");
            generatePassword()
        }

    return passwordText
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// steps
// prompt 1 - length of characters
    // prompt() - text box let them fill out number of chars
//character types
    // confirm()1 - lowercase
    //confirm()2 - uppercase
    // confirm()3 - numeric
    // confirm()4 - special chars
// generate password
// display password