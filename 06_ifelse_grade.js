console.log(`1. Write a function voteEligibility() with one arg-->age to check whether he or she is eligible for voting or not, Then accordingly display message on console, don't return the value please`);
console.log(``);
function voteEligibility( age ){
    console.log(`Candidate age : ${age}`);

    if ( age == undefined || age == null || age <= 0 || age > 90) {
        console.log( `Invalid Data` );
    } else {
        if ( age < 18  || age > 90)  {
            console.log(`You are not eligible for vote`);    
        } else {
            console.log(`You are eligible for vote`);
        }
    }
    console.log(``);
}
 voteEligibility(45);
 voteEligibility(17);
 voteEligibility(8);
 voteEligibility(20);
 voteEligibility(-10);
 voteEligibility(200);
 voteEligibility(0);
 voteEligibility(undefined);
 voteEligibility(null);
 
