// Assignment Code
var generateBtn = document.querySelector("#generate");

// variables for all upper and lowercase letters, numbers, and characters)
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

var passwordText = document.querySelector("#password");
var randomString = ""

passwordText.value = password;

 // Choose password criteria
 var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
 var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
 var num = confirm("Do you want your password to contain numbers?");
 var specialChar = confirm("Do you want your password to contain special characters?");
 var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

 // Password must be betweeen 8 - 128 characters
 if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password is not between 8 characters and 128 characters. Please try again.");
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}

 // Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
 else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
  alert("You must chose at least one password criteria.");
  var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
  var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
  var num = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");
}

// Password criteria
 if (lowercaseLett) {
  optionsVariable += lowercaseAlphabet;
}

if (uppercaseLett) {
  optionsVariable += uppercaseAlphabet;
}

if (num) {
  optionsVariable += numbers;
}

if (specialChar) {
  optionsVariable += specialCharacters;
}

 // Generates a random password based on the criteria that have been selected
 for (var i = 0; i < passwordLength; i++) {
  // Continues to select a random character value from the string until it is the desired length
  randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}
password.value = randomString;

}