//Object => {} => {key : value} pair
var user = {
    firstName: "Aisha",
    age: 19,
    isStudent: true,
    address: {
        streetName: "abc road",
        city: "karachi",
        country: "pakistan",
    },
};
console.log(user);
var student = {
    fullName: "Mehak",
    rollNumber: 23,
    isPass: true,
    subject: ["English", "Physics", "Chemistry", "Math"],
};
console.log(student.fullName);
console.log(student.rollNumber);
console.log(student.isPass);
console.log(student.subject[1]);
var arr = [{}, {}, {}, [], [],];
var obj = {
    key: {
        key: {}
    },
    key2: []
};
