//Object => {} => {key : value} pair

let user = {
    firstName : "Aisha",
    age : 19,
    isStudent: true,
    address :{
        streetName: "abc road",
        city: "karachi",
        country: "pakistan",
    },
 }

 console.log(user);

 
 let student = {
     fullName : "Mehak",
     rollNumber : 23,
     isPass : true,
     subject: ["English", "Physics", "Chemistry", "Math"],
 }
 
 console.log(student.fullName);
 console.log(student.rollNumber);
 console.log(student.isPass);
 console.log(student.subject[1]);
 
 let arr = [{}, {}, {}, [], [],]
 
 let obj = {
     key : {
         key :{}
     },
     key2: []
 };