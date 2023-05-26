console.log(`WAP to print numbers from 5 to 15 by incrementing 1`);
let i = 5;
while (i <= 15) {
    console.log(` ${i}`);
    i++;    
}

console.log(``);
console.log(`WAP to print numbers from 50 to 40 by decremention by 1`);
let j = 50;
while (j >= 40) {
    console.log(`${j}`);
    j--;
}

console.log(``);
console.log(`WAP to find first 15 odd numbers`);
let k = 0;
while (k <= 30) {
    if(k %2 !==0){
        console.log(`${k}`)
    }
    k++;
}

console.log(``);
console.log(`WAP to find first 10 even numbers`);
l = 0;
while (l < 20) {
    if(l %2 ==0){
        console.log(l);
    } 
    l++;   
} 

console.log(``);
console.log(`WAP to print table of 5`);
let index = 5;
while (index <= 50 ) {
    if (index %5 ==0) {
        console.log(`${index}`);
    }
    index = index + 5;
}

console.log(``);
console.log(`WAP to print table of 10`);
let m = 10;
while (m <= 100 ) {
    if (m %10 ==0) {
        console.log(`${m}`);
    }
    m = m + 10;
}

console.log(``);
console.log(`WAP to print table of 10 in reverse order`);
let n = 100;
while (n >= 10) {
    if (n % 10 ==0) {
        console.log(`${n}`);    
    }
    n = n - 10; 
}
