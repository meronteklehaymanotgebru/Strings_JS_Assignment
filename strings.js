let extravaganzaStr = "extravaganza";
let lastFourChars = extravaganzaStr.slice(-4);
console.log("Last four characters:", lastFourChars);
let sentenceStr = "The quick fox jumped over the lazy dog";
let insertedStr = sentenceStr.slice(0, 4) + "eat" + sentenceStr.slice(4);
console.log("Inserted string:", insertedStr);
let storyStr = "The quick brown fox jumps over the lazy dog";
let theOccurrences = (storyStr.match(/\bthe\b/gi) || []).length;
let brownOccurrences = (storyStr.match(/\bbrown\b/g) || []).length;
console.log("Occurrences of 'the':", theOccurrences);
console.log("Occurrences of 'brown':", brownOccurrences);
let libraryStr = "The pupils are reading in the library";
let tableStr = "The child was sitting on the table before it fell";
let foundAre = libraryStr.match(/\bare\b/)[0];
let foundSitting = tableStr.match(/\bsitting\b/)[0];
console.log("Found word in libraryStr:", foundAre);
console.log("Found word in tableStr:", foundSitting);
let wonderfulStr = "wonderful";
console.log("UpperCase:", wonderfulStr.toUpperCase());
let amazingStr = "amazing";
let underneathStr = "UndERneath";
console.log("LowerCase (amazing):", amazingStr.toLowerCase());
console.log("LowerCase (UndERneath):", underneathStr.toLowerCase());
let titleStr = "A wonderful world";
let titleCaseStr = titleStr
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log("Title case:", titleCaseStr);