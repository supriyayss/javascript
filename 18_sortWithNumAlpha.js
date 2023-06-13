const array = [10,5, 'a', 'b', 'h', 11];
let sortingNumbers = [];
let sortingChars = [];
const sorting = array.forEach((element) => {
  if (isNaN(element)) {
    sortingChars.push(element);
  } else if (typeof element === "number") {
    sortingNumbers.push(element);
  }
});
console.log("Numbers:", sortingNumbers.join(',')); 
console.log("Alphabets:", sortingChars.join(','));
// const sorting1 = array.filter((element)=>{
//     return typeof element ==='number'
// });
// const sorting2 = array.filter((element)=>{
//     return typeof element ==='string'
// });
// console.log(sorting1, sorting2)