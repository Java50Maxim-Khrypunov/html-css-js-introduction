//Home Work #21

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
class Company
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
    console.log("Employee is added"); return true

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
 return Object.values(this.#employees).filter(empl =>
    empl.birthYear === yearOfBirth);
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
    return Object.values(this.#employees).filter(empl => empl.id)
}
}
let myCompany = new Company();
for(i=0;i < 8; i++)
{
    myCompany.addEmployee(employees[i]); 
}

// console.log(myCompany.addEmployee(employees[2]));
// console.log(myCompany.removeEmloyee(12329));
// console.log(myCompany.getEmployeesByID(12328))
// console.log(myCompany.getEmployessCountry("USA"));
// console.log(myCompany.getEmployeesByAge(20));
// console.log(myCompany.getEmployeesBySalaries(0, 11000));
// console.log(myCompany.removeEmloyee(12329));
// console.log(myCompany.getAllEmployees())
console.log(myCompany.getEmployeesBySalaries(0,20000));