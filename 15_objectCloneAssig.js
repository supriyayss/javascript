console.log(`1. Perform shallow clone`);
const arrayNums = [20,3,4,56,90,400,49];
const clonedArray = arrayNums; // Shallow clone
clonedArray.push(55,66);
console.log("Original Array:", arrayNums);
console.log("Cloned Array:", clonedArray);

console.log(``);
console.log(`2 .Perform deep clone using spread operator`);
const deepCloneArr = [...arrayNums];
arrayNums.push(10,25);
console.log("Original Array:", arrayNums);
console.log("Cloned Array:", deepCloneArr);

console.log(``);
console.log(`3. Merge the array using Spread operator`);
const arrayEven = [2,30,14,8];
const arrayConcat = [...arrayEven, ...arrayNums];
console.log("Merge array is ",arrayConcat);


console.log(``);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address:{
        locality:{
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 43202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800 4567 32", "+91- 9096 5678 77"]
}

console.log(`Adreess is Colony: ${employee_info.address.locality.colony}, Street: ${employee_info.address.locality.street}, City: ${employee_info.address.city}, State: ${employee_info.address.state}, Country: ${employee_info.address.country}, Mobile No: ${employee_info.mobiles}`);
console.log(``);
console.log(`6. Perform deep copy usin JSON.stringify()`);
const clonedDeepCopy = JSON.parse(JSON.stringify(employee_info));
console.log("Original Salary object:", employee_info.salary);
console.log("Original address object:", employee_info.address);

employee_info.salary.july_month = "80,000INR";
employee_info.address.country = "United Kingdom";

console.log("Updated Salary in original object is:", employee_info.salary.july_month);
console.log("Updated Salary in cloned object is:", clonedDeepCopy.salary.july_month);
console.log(``);

console.log("Updated Country in original object is:", employee_info.address.country);
console.log("Updated Country in cloned object is:", clonedDeepCopy.address.country);
