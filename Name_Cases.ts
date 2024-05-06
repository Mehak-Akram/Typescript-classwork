let personName : string = "Mehak AKRAM"

let lowerCase : string = personName.toLowerCase()
let upperCase : string = personName.toUpperCase()
let titleCase : string = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

console.log(lowerCase)
console.log(upperCase)
console.log(titleCase)
