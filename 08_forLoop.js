// for (let index = 0; index <= 10; index++) { // index = 11
//     console.log(index); // 0 1  2 ... 10 
// }
// console.log("After loop");



// // WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
// for (let index = 5; index <=50; index=index+5) { // index = 11
//     console.log(index); // 0 1  2 ... 10 
// }
// console.log("After loop");

// WAP to get table for 19 in reverse order
// for( let index = 190; index >=19 ;index=index-19){
//     console.log(index);
// }

//WAP to get table for 8 
// for( let i = 8; i<=80; i=i+8){
//     console.log(i);
// }


// JavaScript = J a v a S c r  i  p  t
// var str = "JavaScript"; // 9
// for (let index = 0; index < str.length; index++) { // 0  1   2
//      var char = str.charAt(index); // J  a v
//      console.log(char); 
// }

// WAP to reverse the string --> JavaScript --> tpircSavaJ
// JavaScript -->
// initialization = 9
// condition index>=0
// update expression index--
// var str = "JavaScript";
// var reverseString = "";
// for (let index = 9; index >= 0; index--) { // index = 9  8 
//     var char = str.charAt(index);
//     reverseString = reverseString.concat(char); 
// }
// console.log(reverseString);

function reverseWord(word){
    var reverseString = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // index = 9  8 
        var char = word.charAt(index);
        reverseString = reverseString.concat(char);    
    }
console.log(reverseString);
}
reverseWord("JavaScript");
reverseWord("Google Chrome");
reverseWord("Developer");