// Assignment code here
var lowercaseChars = "abcdefghijklmopqrestuvwxyz";
var upperChars = "ABCDEFGHIJKLMOPQRESTUVWXYZ";
var numericChars = "1234567890";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var length;
function buildPassword(characters) {
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

function getLength(){
   var input = window.prompt("How long would you like the password?");
   if(input <= 128 && input >=8){
     length = input;
   }else{
     window.alert("Length must be a numeric value between 8 and 128");
     getLength();
   }
}

function generatePassword() {
  var characters = "";

  //prompt length is between 8 and 128 characters
  getLength();
  
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
  //a password is generated that matches the selected criteria
  if(characters){return buildPassword(characters);}
  else{
    window.alert("At least one character type must be selected");
    writePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password){
  var passwordText = document.querySelector("#password");

  //the password is either displayed in an alert or written to the page
  console.log(password);
  passwordText.value = password;}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
