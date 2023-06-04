console.log(`Remove duplicate array`);
const arrayNums = [11,3,4,11,4,7,3];
console.log("Given array is:",arrayNums);
const dublicateArray = [];
// output is[11,4,3]
// for (let i=0; i<arrayNums.length;i++) {
//         const element = arrayNums[i];
//         for (let j=i+1; j < arrayNums.length; j++) {
//             if (i == j) {
//                 continue;
//               } 
//             element == arrayNums[j] 
//             arrayNums.splice(j,1);                  
//         }  
  
// }
// console.log(arrayNums);    

// =============================================================
// Output is [11,3,4,7]
for (let i=0; i<arrayNums.length;i++) {
    if(!dublicateArray.includes(arrayNums[i])){
        dublicateArray.push(arrayNums[i])
    }
}

console.log(dublicateArray);

