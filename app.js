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
return employees.find(worker => worker.id===idEmpl);
}
console.log(getEmployee(employees,12324));

function getEmployeesBySalary (employees, salaryFrom, salaryTo)
{
 return employees.filter(empl => salaryFrom <= empl.salary &&  empl.salary<=salaryTo);
}
console.log(getEmployeesBySalary(employees, 10000, 11500))

function getEmployeesByCity (employees, city)
{
    return employees.filter (empl =>empl.address.city === city);
}
console.log(getEmployeesByCity(employees, "Lod"))

function getEmployeeNames(employees)
{
    return employees.map(empl => empl.name)
}
console.log(getEmployeeNames(employees))

function sortEmployeesByAge(employees)
{
    return employees.sort((e1, e2) => e2.birthYear - e1.birthYear);
}
console.log(sortEmployeesByAge(employees))

function computeSalaryBudget(employees)
{
    return employees.reduce((res, empl) => res + empl.salary, 0);
}
console.log(computeSalaryBudget(employees))