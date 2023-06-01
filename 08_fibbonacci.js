
let num1 = 0;
let num2 = 1;
let nextNum;
let series ="";
function fibbonacci(num){//0 1 1 2 3 5
    console.log(`Fibbonacci Series for ${num} :`);
    for(let i = 1; i<=num; i++){//1 2 3 4
        series += " " + num1;//0 1 1 2
        nextNum = num1 + num2;   //1 2 3 5
        num1 = num2; //1 1 2 3
        num2 = nextNum; //1 2 3 5
    }
    console.log(series);
}
fibbonacci(7);