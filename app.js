const rectangle = {width: 20, height: 10, square: function()
{
return this.width * this.height;
}, perimeter:function () {
return this.width*2 + this.height*2}}
//     this.width =100;
// //     this.height=200;
// console.log(rectangle.square());
// console.log(rectangle.perimeter());

class Rectangle 
{
    #width;
    #height;
    constructor(width, height)
    {
        this.#height = height;
        this.#width = width;
    }
    square()
    {
        return this.#width * this.#height;
    }
    perimeter()
    {
        return this.#width * 2 + this.#height * 2;
    }

}
const rectangle1 = new Rectangle(3, 4);
console.log(rectangle1.square());
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
    this.employees = {};
}
addEmployee(worker) 
{
    if(this.#employees[worker.id])
    {return false};
    this.#employees[worker.id]=worker;
    {return true}
}
}
let myCompany = new Company();
for(i=0;i < 7; i++)
{
    myCompany.addEmployee(employees[i]);
}
console.log(myCompany.addEmployee(employees[2]))





// getEmployessCountry()
// {
//     //return array of employee
// }
// getEmployeesByAge(ege)
// {
//     const currentYear = new Date().getFullYear();
//     //returns array of employee objects with given age
// }
// getEmployeesBySalaries(salaryFrom, salaryTo)
// {
//     //return array of employee objects with salaryon a given closed range []
// }
