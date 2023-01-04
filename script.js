// Assignment Code
var generateBtn = document.querySelector("#generate");

// the generate password function is not defined so I must define it below
// the amount of characters user can choose to be in password
// this seems to not work

function number() {
  var allNums = [];
for( i = 8; i <= 128; i++){
    allNums.push(i);
  }
  return allNums
}

var chooseNumber = number();
console.log(chooseNumber);


function generatePassword() {
  var chooseNumber;
  var char= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var sChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = " ";
  

  for (var i = 8; i <= 128; i++) {
    
    var userChar = prompt(" How many characters do you want in your password? ")
    
    if (userChar == i){
      prompt(" Do you want any special characters in your password?");
    } else{
      alert(" Your password needs to be between 8 - 128 characters")
    }
    
  }
}









// Write password to the #password inputy 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
