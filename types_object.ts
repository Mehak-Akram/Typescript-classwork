
interface addressType{
    streetName: string;
        city: string;
        country: string;
    };

type userType = {
firstName : string;
age : number;
isStudent: boolean;
address : addressType;
};

let user: userType[] =[{
    firstName : "Aisha",
    age : 19,
    isStudent: true,
    address :{
        streetName: "abc road",
        city: "karachi",
        country: "pakistan",
    },
 },]
 
 console.log(user);

 interface studentmarkstype{
    english : number;
    math : number;
    physic : number;
 }

 type studentType ={
    fullName : string;
    rollNumber : number;
    isPass : boolean,
    subject: string[];
    subjectMarks: studentmarkstype;
    }
 
 
 let student = {
     fullName : "Mehak",
     rollNumber : 23,
     isPass : true,
     subject: ["English", "Physics", "Chemistry", "Math"],
     studentMarks : {
        english : 50,
        math : 43,
        physic: 36,
     }
 }
 
console.log(student);

type productType = {
    Name : string;
    price : number;
    color : string;
};

let product = {
    Name : "pen",
    price : 30,
    color : "blue",
}
 
console.log(product); 