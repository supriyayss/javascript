console.log(`1. Find the greatest number amongst two number.`);
var greaterNumber = function (num1,num2){
    console.log(`Two Numbers are: ${num1} & ${num2}`);
    var resultGreater = num1 >= num2 ? `${num1} is Greater Number` : `${num2} is Greater Number`;
    console.log(`${resultGreater}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(``);

console.log(`2. Check -> 29,44,0,101 even or odd numbers`);
var isEvenOrOddNum = function(num){

    var result = num % 2 == 0 ? true : false;
    var resultEvenOdd = result == true ? `${num} is even` : `${num} is odd`
    return resultEvenOdd;
}
var evenOddNum1 = isEvenOrOddNum(29);
console.log(`${evenOddNum1}`);
var evenOddNum2 = isEvenOrOddNum(44);
console.log(`${evenOddNum2}`);
var evenOddNum3 = isEvenOrOddNum(0);
console.log(`${evenOddNum3}`);
var evenOddNum4 = isEvenOrOddNum(101);
console.log(`${evenOddNum4}`);
console.log(``);

console.log(`3. Check-> which word has even or odd length "JavaScript","developer","Google"`);
var wordLength = function(stringArg){
    var strLength = stringArg.length;
    console.log(`String is: ${stringArg} | String Length is: ${strLength}`);
    var evenOrOddLength = strLength % 2 == 0 ? `${stringArg} has EVEN length word` : `${stringArg} has ODD length word`;
    return evenOrOddLength;

}
var resultOne = wordLength("JavaScript");
console.log(`${resultOne}`);
var resultTwo = wordLength("developer");
console.log(`${resultTwo}`);
var resultThree = wordLength("Google");
console.log(`${resultThree}`);
