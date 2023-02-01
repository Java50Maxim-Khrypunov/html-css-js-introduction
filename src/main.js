import {Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import {getRandomNumber } from "./utils/random.js";
const company = new Company();
const MIN_ID = 100000000;
const MAX_ID = 999999999;
// const formElement =document.getElementById("employee-form");

const employeeForm = new EmployeeForm("form-section");
function addEmployee(employeeData)
{
const id = getRandomNumber(MIN_ID, MAX_ID);
const employee = createEmployee(id,employeeData.name,+employeeData.birthYear,
+employeeData.salary, employeeData.city, employeeData.country);
company.addEmployee(employee);
console.log(employee);
}
employeeForm.addFormHandler(addEmployee);
