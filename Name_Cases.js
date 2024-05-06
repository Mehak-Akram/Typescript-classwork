var personName = "Mehak AKRAM";
var lowerCase = personName.toLowerCase();
var upperCase = personName.toUpperCase();
var titleCase = personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log(lowerCase);
console.log(upperCase);
console.log(titleCase);
