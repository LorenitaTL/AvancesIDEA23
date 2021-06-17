//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript";
//Print the string on the browser console using console.log()
console.log(challenge);
//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
let challengeUpCase = challenge.toUpperCase();
console.log(challengeUpCase);

//Change all the string characters to lowercase letters using toLowerCase() method
let challengeLowerCase = challenge.toLowerCase();
console.log(challengeLowerCase);

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let newPhrase = challenge.substr(3, challenge.length);
console.log(newPhrase);

//Check if the string contains a word Script using includes() method
console.log(newPhrase.includes("Script"));

//Split the string into an array using split() method
let arrayNewPhrase = newPhrase.split(" ");
console.log(arrayNewPhrase);

//Split the string 30 Days Of JavaScript at the space using split() method
let newChallengeArray = challenge.split(" ");
console.log(newChallengeArray);

//split the string at the comma and change it to an array.
let socialNetworks = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

let arraySocialNetworks = socialNetworks.split(",");
console.log(arraySocialNetworks);

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let challengePython = challenge.replace("JavaScript", "Python");
console.log(challengePython);

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log("Character at index 15: " + challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log("Character code of J: " + challenge.charCodeAt("J"));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log("First occurrence of 'a' character: " + challenge.indexOf("a"));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(
  "The position of the last occurrence of 'a': " + challenge.lastIndexOf("a")
);

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let newSentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(
  "First occurrence of word 'because': ",
  newSentence.indexOf("because")
);

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  "Last occurrence of word 'because': " + newSentence.lastIndexOf("because")
);

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(
  "Position of word 'because' using search: ",
  newSentence.search("because")
);

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challengeForTrim = "   30 Days Of JavaScript   ";
console.log(challengeForTrim);
console.log("Apply trim()", challengeForTrim.trim("   "));

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Use startsWith()", challenge.startsWith("30"));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log("Use endsWith()", challenge.endsWith("JavaScript"));

//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log("Find all a's", challenge.match(/a/gi));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let newString = "30 Days of";
console.log("Use concat() ", newString.concat(" JavaScript"));

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));
