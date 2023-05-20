console.log(`Function expression with no return value to check TCS interview eligibility using if-else statement.`);
var eligibilityForTcs = function(gradScore,hscScore,sscScore,candidateName){
    console.log(`Candidate Name:    ${candidateName}`);
    console.log(`Graduation Score:  ${gradScore}`);
    console.log(`HSC Score:         ${hscScore}`);
    console.log(`SSC Score:         ${sscScore}`);

    if (gradScore >= 70 || hscScore >= 80 || sscScore >= 90) {
        console.log(`Congrats, ${candidateName} you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately, ${candidateName} you are not eligible for the interview`);
        } 
    }
    

eligibilityForTcs(80,60,90,"Supriya");
console.log(``);
eligibilityForTcs(70,65,55,"Yuvraj");
console.log(``);
eligibilityForTcs(60,79,88,"Vishwajeet");


