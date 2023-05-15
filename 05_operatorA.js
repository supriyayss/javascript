console.log(`1.Find the length of word and return it's length square.`);
function squareOfWordLength(strValue){
    var lengthWord = strValue.length;

    console.log(`Length Of String is: ${lengthWord}`);
    console.log(`String Length of Square is: ${lengthWord * lengthWord}`);

}
squareOfWordLength("JavaScript"); 
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`------------------------------------------`);
console.log(`2.1. Find the string length and divide by total number words available in that string.`);
function stringOperation(){
    var string = "I am Angular Developer";
    var strLength = string.length;
    var splitWords = string.split(" ");
    var lengthSplitWord = splitWords.length;
    console.log(`Given String is: I am Angular Developer`);
    console.log(`Length of string is: ${strLength}`);
    console.log(`Number of words are: ${lengthSplitWord}`);
    console.log(`String length / number of words is: ${strLength / lengthSplitWord}`);
    console.log(`String length * total number of words is: ${strLength * lengthSplitWord}`);

}
stringOperation();