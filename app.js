
function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
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
// console.log(getEmployee(employees,12324));

function getEmployeesBySalary (employees, salaryFrom, salaryTo)
{
 return employees.filter(empl => salaryFrom <= empl.salary &&  empl.salary<=salaryTo);
}
// console.log(getEmployeesBySalary(employees, 10000, 11500))

function getEmployeesByCity (employees, city)
{
    return employees.filter (empl =>empl.address.city === city);
}
// console.log(getEmployeesByCity(employees, "Lod"))

function getEmployeeNames(employees)
{
    return employees.map(empl => empl.name)
}
// console.log(getEmployeeNames(employees))

function sortEmployeesByAge(employees)
{
    return employees.sort((e1, e2) => e2.birthYear - e1.birthYear);
}
// console.log(sortEmployeesByAge(employees))

function computeSalaryBudget(employees)
{
    return employees.reduce((res, empl) => res + empl.salary, 0);
}
// console.log(computeSalaryBudget(employees))

let field = "salary";

function displayFieldValue(employees, index, field)
{
    console.log(employees[index][field])
}
// displayFieldValue(employees, 3, "id")
// employees[0].salary = 20000;
// employees[0].department = "QA";
// delete employees[0].department
// displayFieldValue(employees, 0, "department")

function computeMinMaxAvgSalary(employees)
{
   const res = employees.reduce((res,empl)=>{
        if (res.minSalary > empl.salary)
        {
            res.minSalary = empl.salary;
        }
        else if (res.maxSalary < empl.salary)
        {
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;
    }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
    res.avgSalary= res.avgSalary / employees.length;
    return res;
}
function displayValue(minMaxAvg, field)
{console.log(`value of the field ${field} is ${minMaxAvg[field]}`)};

const minMaxAvg = computeMinMaxAvgSalary(employees)
// displayValue(minMaxAvg, "avgSalary");
// displayValue(minMaxAvg, "minSalary");
// displayValue(minMaxAvg, "maxSalary");

const strings =["b", "xyz", "lmn", "xyz", "lmn","xyz", "a" ];
function displayStringOccurrences(strings)
{
const stringOccurrences = getStringOccurrences(strings); // новый двухмерный массив
const arrayOccurrences = Object.entries(stringOccurrences); // дает нам поля и значения 
arrayOccurrences.sort(stringComp);
arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurrences(strings)
{
    const res = {};
    strings.forEach(str => 
        {
             if (!res[str]) {
                res[str] = 1;// новое поле
             }
             else res[str]++;
        })
        return res;
}
function stringComp(entry1, entry2)
{
    let res = entry2[1]- entry1[1];
    if (res === 0) {
        res = entry1[0] < entry2[0]? -1 : 1;
    }
    return res;
}

displayStringOccurrences(strings)

function getMax(array)
{
    const result = array.reduce(function (res, cur)
    {
        if (res>cur) {return res};
        return cur;
    });
    return result;
}