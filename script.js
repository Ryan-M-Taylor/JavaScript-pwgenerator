// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefgh"
var upperCade = "ABCDEFGH"
var numbers = "123456789"
var special = "!@#$%^&*("
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  passwordText.value = password

  
}
function generatePassword(){
  console.log("generating passsword function called")
  var finalPassword = ""
  var passwordBase = ""
var charLength = prompt("Choose a password length (in digits) between 8 and 128 characters")
console.log(charLength)
if(charLength>=8 && charLength <= 128 ){
  console.log("it's between 8 and 128")
} else {
  generatePassword()
}
var userWantsNumbers = confirm("You want numbers or nah?")
console.log(userWantsNumbers)
if(userWantsNumbers === true){
  passwordBase += numbers
  console.log(passwordBase)
}
var userWantsLower = confirm("You want lower case or nah?")
console.log(userWantsLower)
if(userWantsLower === true){
  passwordBase += lowerCase
  console.log(passwordBase)
}




  return finalPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
