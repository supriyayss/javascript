class Vehicles{
    constructor(name,model,capacity,color,price){
        this.name = name;
        this.model = model;
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}
const brezza = new Vehicles ('Brezza', 'Zxi Plus', 5, 'White','14.14 Lakh');
const safari = new Vehicles ('Safari', 'SUV', 7, 'Gray', '15.65-25.01 Lakh');
const kia = new Vehicles ('Kia', 'Sonet', 5, 'Black', '14.89 Lakh');
const fortuner = new Vehicles ('Toyota Fortuner', '4X4 Diesel', 7, 'Phantom Brown', '38.93 Lakh');
const jawa = new Vehicles ('Jawa','42 Bobber', 1, 'Galactic Green','1.74 Lakh');

const arrayOfVehicles = [brezza, safari, kia, fortuner, jawa];
console.log(`2. Traversing the vehicles array`);
console.log(``);
for (const element of arrayOfVehicles) {
    console.log(`Name: ${element.name}, Model: ${element.model}, Seating Capacity: ${element.capacity}, Color: ${element.color}, Price: ${element.price}`);
}


console.log(`------------------------------------------------------------------`);
console.log(`3. Define a class for college and WAF traverseObject() with one arg it should traverse the complete object.`);
console.log(``);
class College {
    constructor(collegeName, type, department, city){
        this.collegeName = collegeName;
        this.type = type;
        this.department = department;
        this.city = city;
    }   
}
const collegeOne = new College ('Bharati Vidyapeeth University', 'Private', 'Computer', 'Pune');
const collegeTwo = new College ('Vidya Pratishthan College', 'Private', 'Computer', 'Baramati');
const collegeThree = new College ('Government College of Engineering', 'Government', 'Engineering', 'Karad');
const collegeFour = new College ('D.Y. Patil Vidyapeeth', 'Private', 'Management', 'Pune');


function traverseObject(collegeObject){
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key} : ${element}`);
            
        }
    }
}
traverseObject(collegeOne);
console.log(``);
traverseObject(collegeTwo);
console.log(``);
traverseObject(collegeThree);
console.log(``);
traverseObject(collegeFour);



