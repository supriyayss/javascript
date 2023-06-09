// Call() apply() bind()

const person = {
    name: "Stew",
    age: 54
}
function sayHello(company) {
    console.log(` ${person.name} ${person.age}  ${company}`);//we also use this.name
}

sayHello.call(person, "Apple" )

console.log("apply()");
sayHello.apply(person, ["Apple" , "CEO"] );     

console.log("bind()");
let funRef = sayHello.bind(person);

funRef("Apple" , "CEO" );