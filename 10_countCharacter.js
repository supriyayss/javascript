
console.log(`Write a function count the total number characters 'a' or 'A' return the count from the function.`);
function countCharA(str){
    console.log(`String : ${str}`);
    var count = 0;
    for(i = 0; i<=str.length; i++){
        if(str.charAt(i) =='a'  || str.charAt(i) == 'A'){
            count ++;
        }
    }
    return count;

}
var totalCountChar1 = countCharA("I Am Learning JavaScript, The language of internet");
console.log(`Number of character 'a' or 'A' in string: ${totalCountChar1}`);
console.log(``);

var totalCountChar2 = countCharA("My favourite movie is LAggAn");
console.log(`Number of character 'a' or 'A' in string: ${totalCountChar2}`);