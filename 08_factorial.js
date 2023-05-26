console.log(`The factorial number is a positive integers that multiplies a number by every number below it till 1`);
// 4!=4*3*2*1
function factorial(num){
    var fact = 1;
    console.log(`Number: ${num}`);
    if(num == 0 || num == 1){
        console.log(`Factorial is: ${fact}`);
    }
    else if(num > 1){
        for(let i = num; i > 0; i--){
            fact = fact * i;
        }
        console.log(`Factorial is: ${fact}`);
    }
    else{
        console.log(`Number has to be positive`);
    }
    console.log(``);
   
}
factorial(4);
factorial(8);
factorial(-3);
factorial(6);
