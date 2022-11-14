// Global Variable
let number = ['0','1','2','3','4','5','6','7','8','9'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
let special = ['@', '%', '+', '\\', '/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let password = [];
let allChoices = [];

// 03 JavaScript Code
// Assignment Code
let generateBtn = document.querySelector("#generate");

// This function will generate a password and return it to the correct password
function generatePassword() {
 password = [];
  // Create a password thats as long as the length
  //predefined
  return null;
}
//Need to know how long the password is 
let passwordLength = window.prompt(`How long is your password?`);
if (passwordLength < 8 || passwordLength < 50 || isNaN(passwordLength)) {
  alert('You must choose a value between 8 and 50.');

// Need to know what characters they want in their password
let isNumbers = confirm(`Do you want numbers?`);
let isSpecial = confirm(`Do you want special characters?`);
let isLower = confirm(`Do you want lowercase characters?`);
let isUpper = confirm(`Do you want upppercase characters?`);

if (isNumbers === false && isLower === false && isSpecial === false  && isUpper === false) {
  window.alert(`Make sure to at least select one of the following options: Lowercase, Uppercase, Special Characters, or Numbers.`)
}
}
//Based on response, call from chosen arrays
// Unsure how to fix error since I noticed it too late
if (isNumbers === true) {
  allChoices = allChoices.concat(number);
  let maximum = number.length - 1;
  let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
  password.push(number[rnd]);
  passwordLength--;
}
if (isLower === true) {
  allChoices = allChoices.concat(lowerCase);
  let maximum = lowerCase.length - 1;
  let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
  password.push(lowerCase[rnd]);
  passwordLength--;
}
if (isSpecial === true) {
  allChoices = allChoices.concat(special);
  let maximum = special.length - 1;
  let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
  password.push(special[rnd]);
  passwordLength--;
}
if (isUpper === true) {
  allChoices = allChoices.concat(upperCase);
  let maximum = upperCase.length - 1;
  let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
  password.push(upperCase[rnd]);
  passwordLength--;
}
for(let i = 0; i < passwordLength; i++ ) {
  let maximum = allChoices.length;
  let minimum = 0;
  let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  password.push(allChoices[rnd]);
}





// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password.join("");
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);