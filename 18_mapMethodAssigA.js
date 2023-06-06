const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("Given array ",arrayNumbers);
console.log(`1. Add 10 into each element and log new array result on consloe.`);

const newMapArray = arrayNumbers.map(element => {
   return element + 10;
});
console.log(newMapArray);

console.log(``);
console.log(`2. Square the each array element and log on consloe.`);
const squareArray =arrayNumbers.map(element => {
    return element * element
})
console.log(squareArray);

console.log(``);
console.log(`3. Add the index value into its corresponding each array element and log new array result on console.`);
const addIndexArray = [];

const addingIndex = arrayNumbers.map ( ( element, index )=>{
    return addIndexArray.push( element + index );
})
console.log(addIndexArray);