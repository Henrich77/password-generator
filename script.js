// Assignment Code
var generateBtn = document.querySelector("#generate");

// the generate password function is not defined so I must define it below

function number() {

  var allNums = []; 

  for( i = 8; i <= 129; i++){
    allNums.push(i);
  }
  return allNums
}

var chooseNumber = number();

// console.log(chooseNumber[5]);

function generatePassword() {

  var userPass = prompt("How many characters do you want your password to be? ");

  userPass = parseInt(userPass);

  if (userPass == chooseNumber[i]){
    prompt(" do you want any special characters in your password");
  }
  else { 
    alert(" your password needs to be between 7-129!");
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
