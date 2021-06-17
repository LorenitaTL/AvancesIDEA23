console.log("\n EXERCISE #2");

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = "10";
if (num === 10) {
  console.log("Is equal!");
} else {
  console.log("Convert to Int", parseInt(num));
}

//Other way
console.log(num === 10 ? "Is equal!" : "Convert to int " + parseInt(num));

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numFloat = 9.8;
console.log(
  numFloat === 10 ? "Is equal to 10" : "ParseInt " + Math.ceil(numFloat)
);

//Check if 'on' is found in both python and jargon
let python = "Python",
  jargon = "jargon";

console.log(python.includes("on") && jargon.includes("on"));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = "I hope this course is not full of jargon";

console.log("Includes jargon? ", sentence.includes("jargon"));

//Generate a random number between 0 and 100 inclusively.
let random1 = Math.floor(Math.random() * 101);
console.log(random1);

//Generate a random number between 50 and 100 inclusively.
let random2 = Math.floor(Math.random() * (100 - 50) + 50);
console.log(random2);

//Generate a random number between 0 and 255 inclusively.
let random3 = Math.floor(Math.random() * 256);
console.log(random3);

//Access the 'JavaScript' string characters using a random number.
let js = "JavaScript";
console.log(js.charAt(Math.floor(Math.random() * js.length)));

//Use console.log() and escape characters to print the following pattern.
let numbers = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(numbers);

//Use substr to slice out the phrase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becausePhrase =
  "You cannot end a sentence with because because because is a conjunction";
let toSlice = "because ";
console.log(
    becausePhrase.substr(becausePhrase.indexOf(toSlice), toSlice.length * 3).trim()
);
