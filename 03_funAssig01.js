// Function with no arguments and no return value
function jsDatatype(){
    console.log("Datatype describes the different types of data to hold the different types of values.")
}
jsDatatype();

console.log("-----------");
function jsVariable(){
    console.log("Variables is a container which can store a value.");
}
jsVariable();

// personalDetail function with 3 arguments
console.log("-----------");
console.log("Personal Details");

function personalDetail(firstName,lastName,collegeName){
    console.log("My Name is:",firstName, lastName);
    console.log("My College Name is:",collegeName);
}
personalDetail("Supriya","Salunkhe","Bharati Vidyapeeth,Pune")

console.log("-----------");

// function for swap values
console.log("Swapping Values");
function swapValuesDude(argOne,argTwo){
    console.log("Before Swap:--","argOne:",argOne,"|", "argTwo:",argTwo);
    var argThree;
    argThree = argOne;
    argOne =argTwo;
    argTwo =argThree;
    console.log("After Swap:--","argOne:",argOne,"|", "argTwo:",argTwo);
}
swapValuesDude("Virat","Anushka");
swapValuesDude(1000,2000);

console.log("-----------");

// Function for Addition
console.log("Addition of numbers and string");
function addThreeValues(valOne,valTwo,valThree){
    var total;
    total = valOne + valTwo +valThree;
    console.log("Addition of three value is:",total);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning");