console.log(`1. Write a arrow function with no args and no return value`);
let arrowNaNrValue = () => console.log(`Good Morning, Today is Monday`);
arrowNaNrValue();

console.log(``);

console.log(`2. Write a arrow function with 3 args and no return value, for received 3 parameters perform the multiplication`);
let multiplication = (numOne, numTwo, numThree=1) =>{
    let multiResult = numOne * numTwo *numThree;
    console.log(`Multiplcation is: ${multiResult}`);
}
multiplication(5,5,2);
multiplication(10,4)

console.log(``);

console.log(`3. Write a arrow function with 5 args and return value such as, for received parametersit should do the addition`);
let addition =(arg1, arg2, arg3, arg4, arg5) =>{
    let total = arg1 + arg2 + arg3 + arg4 + arg5;
    return total;
}
let resultAdd = addition(100,100,200,349,756);
console.log(`Addition of number is: ${resultAdd}`);
let addString = addition("I am ","learning ","ES6 ","features ","in depth");
console.log(`Addition for string(it means Concat string): ${addString}`);
