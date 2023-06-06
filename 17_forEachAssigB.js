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

console.log(`1. Find out the 'TCS' employee details and log only name & company on console.`);
array_employees.forEach( (employee)=>{
    if(employee.emp_company =="TCS"){
        console.log(`Employee name is ${employee.emp_name} and Company ${employee.emp_company}`);
    }
});

console.log(``);
console.log(`2. find the employees with salary greater than or equal 50000.`);
array_employees.forEach((employee)=>{
    if(employee.emp_salary >= 50000){
        console.log(employee);
    }
});

console.log(``);
console.log(`3. find the sum of all employees salary and log on console.`);
let sumOfSalary = 0;
array_employees.forEach((employee)=>{
    sumOfSalary = sumOfSalary + employee.emp_salary;
});
console.log(sumOfSalary);


console.log(``);
console.log(`4. find the average salary and log on console.`);
let average;
const numOfEmp = array_employees.length;
array_employees.forEach((element)=>{
    average = sumOfSalary / numOfEmp;
});
console.log(`Average salary is ${average}`);

console.log(``);
console.log(`5. find the 'IT' OR 'HR' department employees whose salary is greater than or equal to 75000 and log complete employee details on console.`);
array_employees.forEach((employee)=>{
    if((employee.emp_dept == 'IT' || employee.emp_dept == 'HR') && employee.emp_salary >=75000){
            console.log(employee);
    }
});
