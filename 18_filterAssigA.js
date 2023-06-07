const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`1. Find out the numbers which are greater than 50 and log on console.`);
const numGreaterFifty = arrayNumbers.filter((element)=> {
    return element > 50;
});
console.log(numGreaterFifty);
console.log(``);

console.log(`2. find out all the even number and log on console.`);
const evenNumbers = arrayNumbers.filter((element)=>{
    return element %2 == 0;
});
console.log(evenNumbers);
console.log(``);

console.log(`3. find out all the odd number and log on console.`);
const oddNumbers = arrayNumbers.filter((element)=>{
    return element %2!== 0;
});
console.log(oddNumbers);
console.log(``);

console.log(`4. find out all numbers which are multiple of 5`);
const multipleOfFive = arrayNumbers.filter((element)=>{
    return element % 5 == 0;
});
console.log(multipleOfFive);
console.log(``);

console.log(`5. Find out all numbers which are between 20 and 50`);
 const numBetweenTwentyFifty = arrayNumbers.filter((element)=>{
    return element > 20 && element < 50;
 });
 console.log(numBetweenTwentyFifty);


