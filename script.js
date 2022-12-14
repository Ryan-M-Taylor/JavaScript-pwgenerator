// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*()_+=-";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log (password)
  var passwordText = document.querySelector("#password");
  console.log(passwordText);
  passwordText.value = password;
}

// takes user input and generates the characters needed for the password 
function generatePassword() {
  console.log("generating password function called");
  var finalPassword = "";
  var passwordBase = "";
  var charLength = prompt(
    "Choose a password length (in digits) between 8 and 128 characters"
  );
  console.log(charLength);
  if (charLength >= 8 && charLength <= 128) {
    console.log("it's between 8 and 128");
  } else {
    generatePassword();
  }

  var userWantsNumbers = confirm("Do you want to include numbers?");
  console.log(userWantsNumbers);
  if (userWantsNumbers === true) {
    passwordBase += numbers;
    console.log(passwordBase);
  }

  var userWantsLower = confirm("Do you want to include lower case letters?");
  console.log(userWantsLower);
  if (userWantsLower === true) {
    passwordBase += lowerCase;
    console.log(passwordBase);
  }

  var userWantsUpper = confirm("Do you want to include upper case letters?");
  console.log(userWantsUpper);
  if (userWantsUpper === true) {
    passwordBase += upperCase;
    console.log(passwordBase);
  }

  var userWantsSpecial = confirm("Do you want to include special characters?");
  console.log(userWantsSpecial);
  if (userWantsSpecial === true) {
    passwordBase += special;
    console.log(passwordBase);
  }

  if (userWantsNumbers === false && userWantsLower === false && userWantsUpper === false && userWantsSpecial ===false){
  alert("You must choose at least one criteria")
  return generatePassword();
  } else {
    alert("You have successfully created a password")
  }

  for (var i = 0; i < charLength; i++) {
    finalPassword += passwordBase.charAt(
      Math.floor(Math.random() * passwordBase.length)
    );
  }
  console.log(finalPassword);
  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
