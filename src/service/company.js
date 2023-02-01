
import { employeeConfig } from "../config/employee-config.js";
import { getRandomNumber } from "../utils/random.js";

export function createEmployee (name, birthYear, salary, city, country)
{
    const id =  getRandomNumber (employeeConfig.minId, employeeConfig.maxId)
    return{id, name, birthYear, salary, address: {city, country}}
}

export class Company
{
 #employees;
constructor ()
{
    this.#employees = {};
}
addEmployee(worker) 
{
    if(this.#employees[worker.id])
    {console.log("Employee with ID like that already have in base"); return false};
    this.#employees[worker.id]=worker;
    console.log("Employee is added"); 
    console.log(this.getAllEmployees());
    return true;

}
removeEmloyee(id)
{
    if(!this.#employees[id])
    {console.log("Employee with this number was not found"); return false};
    delete this.#employees[id];
    console.log("Employee is removed");
    return true;
}
getEmployeesByID(id)
{
    return Object.values(this.#employees).filter(empl =>
        empl.id === id)
}
getEmployessCountry(country)
{
    return Object.values(this.#employees).filter(empl =>
    empl.address.country === country)
}
getEmployeesByAge(age)
{
 let yearOfBirth = new Date().getFullYear()-age;  
 return Object.values(this.#employees).filter(empl => empl.birthYear === yearOfBirth);
}

getEmployeesBySalaries(salaryFrom, salaryTo)
{
   const res = Object.values(this.#employees).filter(function (empl) 
   {
    if (salaryFrom<=0 && salaryTo<=0) {return empl.salary}
    else if (salaryFrom>0 && salaryTo>0) {return empl.salary>salaryFrom && empl.salary<salaryTo}
    else if (salaryFrom<=0) {return empl.salary<=salaryTo}
    else if (salaryTo<=0) {return empl.salary>=salaryFrom}
    });   
    return res;
}

getAllEmployees()
{
    return Object.values(this.#employees)
}
}
// let myCompany = new Company();
// for(i=0;i < 8; i++)
// {
//     myCompany.addEmployee(employees[i]); 
// }

