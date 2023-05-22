console.log(`1. Count the total number vowels including small and capital vowels for string--> "I am very good IT Developer"`);
var word = "I am very good IT Developer";
count = 0;
function vowels(){
    for(i = 0; i<word.length; i++){
        var char = word.charAt(i);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')  {
                console.log(`vowels is: ${char}`);
              count++;
        } 
    }
    console.log(`Count total vowels: ${count}`);
}
vowels();

console.log(``);
console.log(`2. Write a function to get the sum of cube of numbers from 1 to 5`);
function cubeOfNumbers(){
    var cubeAddition = 0;
    for(i = 1; i<=5 ; i++){//1*1*1+2*2*2....+5*5*5
       var cube = i*i*i;
       console.log(`Cube of ${i} : ${cube}`);
       cubeAddition += cube;
    //    console.log(`Cube Addition is: ${cubeAddition+=cube}`);
    }
   console.log(`Sum of Cube of 1 to 5 number is: ${cubeAddition}`);
}
cubeOfNumbers();

console.log(``);
console.log(`3. Log only odd positioned chars on console and do not consider empty spaces.`);
function oddPositionedChars(str){
    var char;
    for(i=0; i<str.length;i++){
        var char = str.charAt(i);
        if (i%2!==0 && char!=" ") {
            console.log(`Odd position: ${i} Character is: ${char}`);
        } 
    }   

}
console.log(`String1 - Hard work always pays back`);
oddPositionedChars(`Hard work always pays back`);
console.log(``);
console.log(`String2 - Soon I will be Angular IT Champ`);
oddPositionedChars(`Soon I will be Angular IT Champ`);
