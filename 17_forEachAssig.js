const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`1. Log the array element with its index using forEach() with arrow function`);
arrayNumbers.forEach( (element, index)=>{
    console.log(`Element: ${element} Index: ${index}`);
});

console.log(``);
console.log(`2. Find the positive numbers and log on consloe`);
arrayNumbers.forEach((element)=>{
    if(element > 0){
        console.log(` ${element}`);
    }
});

console.log(``);
console.log(`3. Find the negative numbers, add into new array and log new array on console using arrow function`);
const arrayNegNum =[];
arrayNumbers.forEach ((element)=>{
    if(element<0){
        arrayNegNum.push(element);
    }
 
} );
const result = () => arrayNegNum
console.log(result());


console.log(``);
console.log(`4. Find the even numbers and log on console using forEach() with arrow function.`);
arrayNumbers.forEach( (element) => {
    if(element %2 == 0){
        console.log(`${element}`);
    }
});

console.log(``);
console.log(`5. Find the sum of all elements from arrayNumbers and log on sum value on console.`);
let sum =0;
arrayNumbers.forEach( (element) =>{
    sum = sum +element;
});
console.log(`Sum of all element is ${sum}`);

console.log(``);
console.log(`6. Log the only even indexed array value on console.`);
arrayNumbers.forEach( (element, index)=>{
    if(index%2 ==0){
        console.log(`index: ${index} value:${element}`);
    }
});