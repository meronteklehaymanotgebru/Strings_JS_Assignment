const extravaganza = "extravaganza";
let lastFourChars = extravaganza.slice(-4);
console.log("Last four characters:", lastFourChars);

const food = "The quick fox jumped over the lazy dog";
let insertedStr = food.slice(0, 4) + "eat" + food.slice(4);
console.log("Inserted string:", insertedStr);

const story = "The quick brown fox jumps over the lazy dog";
let theOccurrences = (story.match(/\bthe\b/gi) || []).length;
let brownOccurrences = (story.match(/\bbrown\b/g) || []).length;
console.log("Occurrences of 'the':", theOccurrences);
console.log("Occurrences of 'brown':", brownOccurrences);

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
let foundAre = string1.match(/\bare\b/)[0];
let foundSitting = string2.match(/\bsitting\b/)[0];
console.log("Found word in string1:", foundAre);
console.log("Found word in string2:", foundSitting);

const wonderful = "wonderful";
console.log("UpperCase:", wonderful.toUpperCase());
const amazing = "amazing";
const underneath = "UndERneath";
console.log("LowerCase (amazing):", amazing.toLowerCase());
console.log("LowerCase (UndERneath):", underneath.toLowerCase());
const title = "A wonderful world";
let titleCaseStr = title
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("Title case:", titleCaseStr);