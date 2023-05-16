console.log(`1. Write a normal function 'maleMarriageEligibility with 3 args gender,age and boyName. Function should return msg as per the step 1.2 according to condition check.`);

function maleMarriageEligibility(gender,age,boyName) {
    console.log(`Gender: ${gender} | Age: ${age} | Name: ${boyName}`);
   var eligibleBoy = gender == "Male" && age >= 21 ? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are not eligible for Marriage`
    return eligibleBoy;
}
var resultForEligible1 = maleMarriageEligibility("Male",25,"Billgates");
console.log(`${resultForEligible1}`);
var resultForEligible2 = maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`${resultForEligible2}`);

console.log(``);

console.log(`2.Write a function "femaleMarriageEligibility()" with 3 args gender,age and girlName. Function should return msg as per the step 2.2 according to condition check.`);
function femaleMarriageEligibility(gender,age,girlName){
    console.log(`Gender: ${gender} | Age: ${age} | Name: ${girlName}`);
    var eligibleGirl = gender == "Female" && age >= 18 ? `Hey ${girlName} you are eligible for Marriage` : `Hey ${girlName} you are not eligible for Marriage`;
    return eligibleGirl;
}
var resutleliGirl1 = femaleMarriageEligibility("Female",16,"Jenifer");
console.log(`${resutleliGirl1}`);
var resutleliGirl2 = femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(`${resutleliGirl2}`);