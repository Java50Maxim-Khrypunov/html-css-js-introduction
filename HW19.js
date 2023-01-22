function createEmployee(id, name, birthYear, salary, city, country) {
   return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
   createEmployee(12323, "Gosha", 1999, 15000, "Lod", "Israel"),
   createEmployee(12324, "David", 1975, 15500, "New York", "USA"), 
   createEmployee(12325, "Sara", 1998, 20000, "New York", "USA"),
   createEmployee(12326, "Abraham", 1990, 13000, "London", "England"),
   createEmployee(12327, "Moshe", 1991, 11200, "Rehovot", "Israel"),
   createEmployee(12328, "Goga", 1993, 14000, "Tbilisi", "Georgea"),
   createEmployee(12329, "Sasha", 1988, 25000, "Ramat Gan", "Israel"),
   createEmployee(12330, "Victor", 2003, 10000, "Arad", "Israel")
];
//// TASK 1

function getMostPopulated(employees) 
{
   let employees1 = getCountries(employees);
   const stringOccurrences = getStringOccurrences(employees1);
   const arrayOccurrences = Object.entries(stringOccurrences);
   const mostPopulatedCountry = getMax(arrayOccurrences);
   console.log(`country where most of the company employees live ${mostPopulatedCountry[0]}, 
live in it ${mostPopulatedCountry[1]} employees`);
}

function getCountries(employees)
{
   return employees.map(empl => empl.address.country)
}

function getStringOccurrences(strings)
{
    const res= {};
    strings.forEach(str1 => 
        {
             if (!res[str1]) {
               res[str1] = 1;
             }
             else res[str1]++;
        })
        return res;
}
function getMax(array) {
   return array.reduce(function(max, cur) 
   {
     return cur[1] > max ? cur[1] : max;
   })
 }

 getMostPopulated(employees)

//// TASK 2

function getMostPopulatedCountries(employees, number)
{
      let employees1 = getCountries(employees);
      const stringOccurrences = getStringOccurrences(employees1);
      const arrayOccurrences = Object.entries(stringOccurrences);
      arrayOccurrences.sort(sorting);
      let counter = number;
      counter <=arrayOccurrences.length ? print(arrayOccurrences, counter) : console.log(`Error. Incorrect number of countries where the company's employees live.
      Number of countries where our employees live -> ${arrayOccurrences.length}.`)
}

function sorting(entry1, entry2)
{
    let res = entry2[1]- entry1[1];
    return res;
}

function print(array, number)
{
let index = 0;
do {console.log(`${array[index][0]} -> ${array[index][1]}`);
index++}
while (index < number);
}

getMostPopulatedCountries(employees, 5)



// TASK 3
function isAnagram (word, anagram)
{
let flag = false;
if (word.length === anagram.length)
{
   let arrayFromWord = Array.from(word);
   const stringOccurrences = getLetters(arrayFromWord);
   const arrayOccurrences = Object.entries(stringOccurrences);
   const control = anagramChecking(word, anagram);
   const control2 = sum(arrayOccurrences);
   if (control === control2)
   {flag = true};
}
return flag;
}
function anagramChecking(array1, anagram)
{
   Array.from(array1)
   let counter = 0;
   for (i = 0; i<anagram.length; i++)
   {
      if(anagram.includes(array1[i])){
         counter ++
      }
   }
   return counter;
}
function getLetters(strings)
{  
    const res= {};
    strings.forEach(str1 => 
        {
             if (!res[str1]) {
               res[str1] = 1;
             }
             else res[str1]++;
        })
        return res;
}
function sum(ar)
{
    return ar.reduce((res, number) => res + number[1], 0);
}

console.log(isAnagram ("yellow", "esloly"));