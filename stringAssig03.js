const str = "How are you mate";
console.log("Given string is: ",str);
const words = str.split(" ");
// console.log(words);

const stringPush = [];
for (let word of words) {
    // console.log(word);
    
    stringPush .push(word.charAt(0).toUpperCase() + word.slice(1,word.length-1) + word.charAt(word.length-1).toUpperCase());
}
const outputString = stringPush.join(" ")
console.log(outputString);
// ===================================
// const str = "How are you mate";
// console.log("Given string is: ",str);
// const words = str.split(" ");

// const stringPush = [];
// for (let [index, word] of words.entries()) {
//     if(words.length-1 === index){
//         stringPush.push(word.charAt(0).toUpperCase() + word.slice(1,word.length-1) + word.charAt(word.length-1)) 
//     } else {
//         stringPush.push(word.charAt(0).toUpperCase() + word.slice(1,word.length-1) + word.charAt(word.length-1).toUpperCase());
//     }
// }
// const outputString = stringPush.join(" ")
// console.log(outputString);

