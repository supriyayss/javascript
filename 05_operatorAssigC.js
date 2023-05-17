console.log(`Function expression with no return value to check TCS interview eligibility using ternary operator.`);
var eligibilityForTcs = function(gradScore, hscScore, sscScore, candidateName) {
    console.log(`Candidate Name:    ${candidateName}`);
    console.log(`Graduation Score:  ${gradScore}`);
    console.log(`HSC Score:         ${hscScore}`);
    console.log(`SSC Score:         ${sscScore}`);
    var criteria = gradScore >= 70 || hscScore >= 80 || sscScore > 90 ? `Congrats ${candidateName}, you are eligible for TCS interview` : `${candidateName} Unfortunately you are not eligible for interview`
    console.log(`${criteria}`);
}
eligibilityForTcs(80,60,90,"Supriya");
console.log(``);
eligibilityForTcs(70,65,55,"Yuvraj");
console.log(``);
eligibilityForTcs(60,79,88,"Vishwajeet");