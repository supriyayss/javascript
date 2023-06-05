class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. Find all the employees working in "TCS" and log only employee names and company name on console.`);
for( let employee of array_employees){
    if(employee.emp_company == "TCS"){
        console.log(`Employee ${employee.emp_name} is working in ${employee.emp_company} `);
    }
}   
console.log(``);

console.log(`2. Find the 'Finance' department employees, log only department and employee name on console.`);
for( let emp of array_employees){
    if(emp.emp_dept == "Finance"){
        console.log(`Employee ${emp.emp_name} in ${emp.emp_dept} department`);
    }
}

console.log(``);
console.log(`3. Find the employees whose name start with 'R' and complete employee details on console.`);

for( let empObj of array_employees){
    if(empObj.emp_name.startsWith("R")){
        console.log(`Id: ${empObj.emp_id}, Employee Name: ${empObj.emp_name}, Department: ${empObj.emp_dept}, Salary: ${empObj.emp_salary}, Company: ${empObj.emp_company}`);
    }

}

console.log(``);
console.log(`4. Find the employees whose salary is greater than 75000, and log on console emp.name, company and salary.`);
for( let employeeObj of array_employees){
    if(employeeObj.emp_salary>75000){
        console.log(` Employee Name: ${employeeObj.emp_name},  Salary: ${employeeObj.emp_salary}, Company: ${employeeObj.emp_company}`);
    }

}

console.log(``);
console.log(`5. Find the employees whose salary is greater than or equal 50000 and from 'IT' department, log complete emp details on console.`);
for(let empObject of array_employees){
    if(empObject.emp_salary >= 50000 && empObject.emp_dept=='IT'){
        console.log(`Employee Detail is- Id: ${empObject.emp_id}, Employee Name: ${empObject.emp_name}, Department: ${empObject.emp_dept}, Salary: ${empObject.emp_salary}, Company: ${empObject.emp_company}`);
    }
}

console.log(``);
console.log(`6. Find out the all employees from company 'Infy' and log complete employee details on console.`);
for(let object of array_employees){
    if(object.emp_company == 'Infy'){
        console.log(`Employees from company 'Infy' is- Id: ${object.emp_id}, Employee Name: ${object.emp_name}, Department: ${object.emp_dept}, Salary: ${object.emp_salary}, Company: ${object.emp_company}`);
    }
}