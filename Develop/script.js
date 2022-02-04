// Assignment code here
var lowercaseChars = "abcdefghijklmopqrestuvwxyz";
var upperChars = "ABCDEFGHIJKLMOPQRESTUVWXYZ";
var numericChars = "1234567890";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function buildPassword(length, characters) {
  var result = "";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

function addCharacters(characters, charactersToAdd){
  characters = characters + charactersToAdd;
  return characters;
}

function generatePassword() {
  var password = "";
  var characters = "";
  //prompt length is between 8 and 128 characters
  var length = window.prompt("How long would you like the password?")
  
  //I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("Should your password include: Lower Case Characters?");
  if(lowercase){characters = addCharacters(characters, lowercaseChars);}

  var uppercase = confirm("Should your password include: Upper Case Characters?");
  if(uppercase){characters = addCharacters(characters, upperChars);}

  var numeric = confirm("Should your password include: Numeric Values?");
  if(numeric){characters = addCharacters(characters, numericChars);}

  var special = confirm("Should your password include: Special Characters (Examples:! # $ *)?");
  if(special){characters = addCharacters(characters, specialChars);}

  //my input should be validated and at least one character type should be selected
  password = buildPassword(length, characters);
  //a password is generated that matches the selected criteria
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //the password is either displayed in an alert or written to the page
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
