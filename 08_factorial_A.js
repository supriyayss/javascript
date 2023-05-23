console.log(`write a function factorialOfNum() with one argument and return result`);
function factorialOfNum(num){
    console.log(`Number: ${num}!`);
    let fact = 1;
    if (num == undefined || isNaN(num)) {
        console.log(`Invalid Inputs`);
        
    } else if (num == 0) {
            return 1;

    } else if (num > 1) {
        for(var i = num; i>=1; i--){
            fact = fact * i;
        }
        return fact;
    } else {
        console.log(`Number has to be positive`)
    }

}
let resultOne = factorialOfNum(5);
console.log(`Factorial is: ${resultOne}`);
console.log(``);

let resultTwo = factorialOfNum(3);
console.log(`Factorial is: ${resultTwo}`);
console.log(``);

let resultThree = factorialOfNum(null);
console.log(``);

let resultFour = factorialOfNum(8);
console.log(`Factorial is: ${resultFour}`);
console.log(``);

let resultFive = factorialOfNum(undefined);
console.log(``);

let resultSix = factorialOfNum(9);
console.log(`Factorial is: ${resultSix}`);
console.log(``);

let resultSeven = factorialOfNum(0);
console.log(`Factorial is: ${resultSeven}`);
console.log(``);

let resultEight = factorialOfNum(-1)




