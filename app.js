const employee1 = {"id": 123, name: "Gosha", birthYear: 2000, salary: 15000, 
address: {city:"Lod", country: "Israel"}};

const employee2 = {"id": 123, name: "Gosha", birthYear: 2000, salary: 15000, 
address: {city:"Lod", country: "Israel"}};

console.log(`employee1 === employee2 is ${employee1 == employee2}`);

const employee3 = employee1;

console.log(`employee3 === employee1 is ${employee3 == employee1}`);

employee3.salary = 20000;
console.log(`employee1 salary = ${employee1.salary}`);

function createEmployee (id, name, birthYear, salary, city, country)
{
    return{id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(12323, "Gosha", 1999, 15000, "Lod", "Israel"),
    createEmployee(12324, "David", 1975, 15500, "Tel-Aviv", "Israel"), 
    createEmployee(12325, "Sara", 1998, 20000, "New York", "USA"),
    createEmployee(12326, "Abraham", 1990, 13000, "London", "England"),
    createEmployee(12327, "Moshe", 1991, 11200, "Rehovot", "Israel"),
    createEmployee(12328, "Goga", 1993, 14000, "Tbilisi", "Georgea"),
    createEmployee(12329, "Sasha", 1988, 25000, "Ramat Gan", "Israel"),
    createEmployee(12330, "Victor", 2003, 10000, "Arad", "Israel")
];
// const index = employees.indexOf(createEmployee(12326, "Abraham", 1990, 13000, "London", "England"))
const index = employees.findIndex(function(empl)
{
    return empl.id === 12325;
})

const index1 = employees.find(function(empl)
{
    return empl.id === 12325;
})

//HW 18
function getEmployee(employees, idEmpl)
{
const person = employees.find(function(worker)
{return worker.id===idEmpl});
return person;
}
console.log(getEmployee(employees,12329));


// function getEmployeesBySalary (employees, salaryFrom, salaryTo)
// {
// return reduce.
// }

function getEmployeesByCity (employees, city)
{
const findCity = employees.find(function (addressCity)
{
 return addressCity.address.city === city;
})
return findCity;
}
console.log(getEmployee(employees, "Lod"));

function getEmployeeNames(employees)
{
    const nameAllEmployees = employees.map(function(nameEmp, index)
    {return index + 1 + "." + nameEmp.name});
    return nameAllEmployees;
}
console.log(getEmployee(employees));

// function sortEmployeesByAge(employees)
// {
//     sort
// }

// function computeSalaryBudget(employees)
// {
    
// }
