//Object => {} => {key : value} pair
let user: object ={
    firstName : "mehak",
    age : 19, 
 }
 
 console.log(user);
 
 let student = {
     fullName : "Mehak",
     rollNumber : 23,
     isPass : true,
     subject: ["English", "Physics", "Chemistry", "Math"],
     feeSchedule:{
         month : "month 2024",
         Amount : 1000,
     }
 }
 
 console.log(student.fullName);
 console.log(student.rollNumber);
 console.log(student.isPass);
 console.log(student.subject[1]);
 console.log(student.feeSchedule.month,);
 console.log("Amount =", student.feeSchedule.Amount);
 
 let arr = [{}, {}, {}, [], [],]
 
 let obj = {
     key : {
         key :{}
     },
     key2: []
 }