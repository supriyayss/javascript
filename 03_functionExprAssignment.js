console.log(`1. Write a function to get square of the number Ex -> 5,6,25,100`);
var square = function (num){
  return num * num;
}
var resultNumOne = square(5);
console.log(`Square of 5 is: ${resultNumOne}`);
var resultNumTwo = square(6);
console.log(`Square of 5 is: ${resultNumTwo}`);
var resultNumThree = square(25);
console.log(`Square of 5 is: ${resultNumThree}`);
var resultNumFour = square(100);
console.log(`Square of 5 is: ${resultNumFour}`);
console.log(`--------------------------------`);

console.log(`2. Check and log type of function`);
var typeOfResult = typeof(square);
console.log(`Type of variable which can store function as value is: ${typeOfResult}`);
console.log(`--------------------------------`);

console.log(`3. Write a FE to get the area of rectangle plot[length = 499 and width = 917]`);
var rectangle = function(rectLength, rectWidth){
    var areaOfRectangle =  rectLength * rectWidth;
    console.log(`Area of rectangle is: ${areaOfRectangle}`);
}
rectangle(499,917);
console.log(`--------------------------------`);


console.log(`4. Write a FE with two args and should swap the passed values and log on console before and after swap values inside function itself.`);
var swapValues = function(argOne, argTwo){
    console.log(`Before swap the values is: argOne - ${argOne} argTwo - ${argTwo}`);
    var temp;
    temp = argOne;
    argOne =argTwo;
    argTwo = temp;
    console.log(`After swap the values is: argOne - ${argOne} argTwo - ${argTwo}`);
}
 swapValues("Virat","Anushka");
 swapValues(1000,2000);
 console.log(`--------------------------------`);

 console.log(`5. Write a FE which can perform the below steps for string "Js the most popular language of internet"`);
 var stringOperation = function (){
    var string = "Js the most popular language of internet";
    console.log(`A. Find the total character available in the string`);
    var stringLength = string.length;
    console.log(`Length of string is: ${stringLength}`);
    console.log(``);

    console.log(`B. Find the character at index 6`); 
    var charAtSix = string.charAt(6); 
    console.log(`Chracter at index 6 is: ${charAtSix}`);
    console.log(``);
    
    console.log(`C. Find the character at index 11`); 
    var charAtEleven = string.charAt(11); 
    console.log(`Chracter at index 11 is: ${charAtEleven}`);
    console.log(``);

    console.log(`D. Find the last character using length property.`);
    var lastChar = string.charAt(39); 
    console.log(`Last character is: ${lastChar}`);
    console.log(``);

    console.log(`E. Find the very first character from the given string.`);
    var firstChar = string.charAt(0); 
    console.log(`Last character is: ${firstChar}`);
    console.log(`F. Find the total number words of the given string and then calculate the square of it and log it.`);
    var totalWords = string.split(" ");
    var lengthOfWords = totalWords.length;
    var squareOftotalWords = lengthOfWords * lengthOfWords;
    console.log(`Total words in given string is: ${lengthOfWords} | and Square of total words is: ${squareOftotalWords}`);
 }
 stringOperation();
