// Assignment Code
let generateBtn = document.querySelector("#generate");
let lwrcaseChar = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upprcaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbrChar = ["0","1","2","3","4","5","6","7","8","9"]
let spclChar = ["!","”","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","_","`","{","|","}","~"]
// let allOptions = []


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    let lengthNeed = window.prompt("How many characters should the password be? Min 8")
    // lengthNeed = parseInt(lengthNeed)
    let password = ""
    
    if (lengthNeed >=8 && lengthNeed <=128) {
        // build array of options first
        // 
        
        for (let i = 0; i < lengthNeed; i++) {
            let passwordFrame = Math.floor(Math.random()*lwrcaseChar.length)
            // console.log(passwordFrame)
            let mightWork = lwrcaseChar[passwordFrame];
            // console.log (mightWork)
            password+= mightWork;
            console.log(password)
        
        }
        return password
        
    } 
    // else if (!lengthNeed){
    //     return "Nothing Selected";
        


    // } else {
    //     window.alert("needs a min of 8 and a max of 128");
    //     generatePassword()
    // }

   // let lowercase = window.confirm("Should the password include lowercase characters?");
    // let uppercase = window.confirm("Should the password include uppercase characters?");
    // let numeric = window.confirm("Should the password include numeric characters?");
    // let special = window.confirm("Should the password include special characters?");

   



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