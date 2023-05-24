console.log(`1.Find the total elements available or length and log on console.`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const lengtharray = arrayNumbers.length;
console.log(`Total elements available in array is ${lengtharray}`);
console.log(``);

console.log(`2.Log the first element and last element in arrayNumbers and log on console`);
const firstElement = arrayNumbers[0];
const lastElement = arrayNumbers[lengtharray-1];
console.log(`First element in array is ${firstElement} and Last element in array is ${lastElement}`);
console.log(``);

console.log(`3. Log the third last element using length property and log on console`);
const thirdLastElem = arrayNumbers[lengtharray-3];
console.log(`Third last element in array is ${thirdLastElem}`);
console.log(``);

console.log(`4. find the all even numbers using for in loop and log on console`);
for (const index in arrayNumbers) {
   if (arrayNumbers[index]%2==0) {
    console.log(`${arrayNumbers[index]}`);
   } 

}
console.log(``);

console.log(`5. find the odd numbers using for in loop and log on console`);
for(const index in arrayNumbers){
  if (arrayNumbers[index]%2!==0) {
    console.log(`${arrayNumbers[index]}`);
  }
}
console.log(``);

console.log(`6. Find the all even positioned elements from arrayNumbers, sum it and log on console`);
let sum = 0;
let evenposArray = [];
for(const index in arrayNumbers){
  if (index % 2==0) {
      evenposArray.push(arrayNumbers[index]);
      sum += arrayNumbers[index];

  }
}
console.log(`Sum of all even positioned element is: ${sum}`);
console.log(``);

console.log(`7. Find all the odd positioned elements from arrayNumbers, sum it and log on console`);
let addition = 0;

for(let i = 0; i < arrayNumbers.length; i++){
  if( i %2 !==0){
    addition += arrayNumbers[i];
  }
}
console.log(`Sum of all odd positioned element is : ${addition}`);
console.log(``);

console.log(`8. Find the sum of all elements from arrayNumbers, log on consloe`);
let sumAllElem = 0;
for (let i = 0; i < arrayNumbers.length; i++){
    sumAllElem += arrayNumbers[i];
}
console.log(`Sum of all element in array: ${sumAllElem}`);
console.log(``);

console.log(`9. Find the numbers which are multiple of 5`);
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 5==0) {
      console.log(arrayNumbers[i]);
    } 
}
console.log(``);

console.log(`10. Is Numbers 115 available in arrayNumbers? `);
const isAvailableElem = arrayNumbers.includes(115);
console.log(`${isAvailableElem}`);
console.log(``);

console.log(`11. Is number 23 available in arrayNumbers?`);
 const isAvailTwentythree = arrayNumbers.includes(23);
console.log(`${isAvailTwentythree}`);
console.log(``);

console.log(`12. Insert numbers-> 55,66 before index 3 and log array on console`);
const insertNum = arrayNumbers.splice(3,0,55,66);
console.log(`Updated array is: ${arrayNumbers}`);
console.log(``);


console.log(`13. Delete 3 elements starting from index 4 and log arrayNumbers on console`);
const deleteElem = arrayNumbers.splice(4,3);
console.log(`${arrayNumbers}`);