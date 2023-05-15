console.log(`1.Find the length of word and return it's length square.`);
function squareOfWordLength(strValue){
    var splitWord = strValue.split(" ");
    var lengthWord = splitWord.length;

    console.log(`Given word is: ${strValue}`);
    console.log(`Length Of word is: ${lengthWord}`);
    console.log(`It's Length of Square: ${lengthWord * lengthWord}`);

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
    console.log(`string Length is: ${strLength} Length of words is: ${lengthSplitWord}`);
    console.log(`String length divided by total number of words is: ${strLength / lengthSplitWord}`);
    console.log(`String length multiply by total number of words is: ${strLength * lengthSplitWord}`);

}
stringOperation();