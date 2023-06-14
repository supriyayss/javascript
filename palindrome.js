

function isPalindrome(string){
    const splitString = string.split('');
    const reverseString = splitString.reverse();
   
    const newString = reverseString.join('');
    if( string === newString ){
        console.log(` ${string} is a palindrome`);
    }
    else{
        console.log(` ${string} is not a palindrome`);
    }

   
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");

// function isPalindrome(string){
//     const strlen = string.length;
//     for(i = 0; i  < strlen / 2; i++ ){
//         if( string[i] !== string[strlen-1-i] ){
//             console.log( `${string} is not palindrome`);
//         }  
//         else{
//             console.log( `${string} is a palindrome` );
//         }
//     }
   
// }