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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`1. Find all the employees from 'Wipro' company`);
const empInWipro = arrayEmps.filter( (employees)=>{
   return employees.emp_company == 'Wipro';
}).map((employee)=>{
    console.log(`Employee Name: ${employee.emp_name} Company: ${employee.emp_company}`);
});
console.log(``);

console.log(`2. Find all the employees from 'IT' OR 'HR' dept`);
const empDept = arrayEmps.filter( (employees)=>{
    return employees.emp_dept == "IT" || employees.emp_dept == "HR";
}).map((employees)=>{
    console.log("Employee Name:", employees.emp_name, "Company:", employees.emp_dept);// we can write== return employees.emp_name 
});                                                                                   //});log(empDept)

console.log(``);

console.log(`3. Find all the employees whose emp id's are geater than 50`);
const idGreaterfifteen = arrayEmps.filter((employees)=>{
    return employees.emp_id > 50;
}).map((emp)=>{
   return emp.emp_name;
});
console.log(idGreaterfifteen);

console.log(``);
console.log(`4. Find all the employees whose names start with letter 'A' or 'V' or 'M'`);
const nameSatrsWithAVM = arrayEmps.filter(( employees) => {
   return employees.emp_name.startsWith("A") || employees.emp_name.startsWith("V") || employees.emp_name.startsWith("M")
}).map((employee)=>{
    return employee.emp_name;
})
console.log(nameSatrsWithAVM);

console.log(``);
console.log(`5. Find the average salary of the employee for all the department`);

const averageSalaryOfAllEmp = arrayEmps.reduce((sumSalary, value)=>{
    return sumSalary + value.emp_salary;
}, 0) / arrayEmps.length;
console.log(averageSalaryOfAllEmp);

console.log(``);
console.log(`6. Find the average salary for IT department`);
const deptIT = arrayEmps.filter((employees)=>{
    return employees.emp_dept=="IT"
});
const averageSalaryOfDeptIT = deptIT.reduce((sumSalary,value)=>{
    return sumSalary + value.emp_salary;
   
},0) / deptIT.length;
console.log(averageSalaryOfDeptIT)


