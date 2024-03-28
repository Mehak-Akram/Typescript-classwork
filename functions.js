//functions
var carName = "toyota";
function logcarName() {
    console.log("toyota");
}
logcarName();
function logSomeName(fruitName, carName, vegName, flowerName, cityName) {
    console.log(fruitName, carName, vegName, flowerName, cityName);
}
logSomeName("mango", "toyota", "carrot", "Rose", "karachi");
logSomeName("apple", "honda", "tomato", "sunflower", "lahore");
//function -> 2 numbers, sum
function sum(a, b) {
    var addNum = a + b;
    return addNum;
}
var val = sum(7, 5);
console.log(val);
//Arrow function
//multipiction function
var arrowMultipication = function (a, b) {
    return a * b;
};
var num = arrowMultipication(5, 2);
console.log(num);
