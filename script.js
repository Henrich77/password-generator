// Assignment Code
var generateBtn = document.querySelector("#generate");

// the generate password function is not defined so I must define it below

function generatePassword() {

  var userPass= prompt(" How many characters would you like your password to be? Pick a number from 7 - 129 ");

}


// Write password to the #password inputy 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
