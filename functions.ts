//functions

let carName: string = "toyota"

function logcarName(){
    console.log("toyota")
}

logcarName()


function logSomeName(fruitName: string, carName: string, vegName: string,flowerName: string, cityName: string){
    console.log(fruitName, carName, vegName, flowerName, cityName);
}

logSomeName("mango", "toyota", "carrot", "Rose", "karachi")
logSomeName("apple", "honda", "tomato", "sunflower", "lahore")

//function -> 2 numbers, sum

function sum(a: number, b: number){
    let addNum = a + b;
    return addNum;
 }
 
  let val = sum(7 , 5);
  console.log(val)

  //Arrow function

  //multipiction function

  const arrowMultipication = (a: number , b: number ) =>{
    return a * b;
  }

  let num = arrowMultipication(5 , 2);
  console.log(num);
 


