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
   const stringNumberofCountries = getStringOccurrences(employees);
   const arrayCounries = Object.entries(stringNumberofCountries);
   const mostPopulatedCountry = getMax(arrayCounries);
   console.log(`country where most of the company employees live - ${mostPopulatedCountry[0]}, 
live in it ${mostPopulatedCountry[1]} employees`);
}

function getStringOccurrences(employees)
{
   const res = {};
   employees.forEach(element => 
      {if(!res[element.address.country])
       {res[element.address.country] = 1;}
        else res[element.address.country]++;
   });
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
      const stringNumberofCountries = getStringOccurrences(employees);
      const arrayCounries = Object.entries(stringNumberofCountries);
      arrayCounries.sort(sorting);
      let counter = number;
      counter <=arrayCounries.length ? print(arrayCounries, counter) : console.log(`Error. Incorrect number of countries where the company's employees live.
      Number of countries where our employees live -> ${arrayCounries.length}.`)
}

function sorting(country1, country2)
{
    let res = country2[1]- country1[1];
    return res;
}

function print(array, counter)
{
let index = 0;
do {console.log(`${array[index][0]} -> ${array[index][1]}`);
index++}
while (index < counter);
}

getMostPopulatedCountries(employees, 5)


// TASK 3
function isAnagram(word, anagram)
{
let flag = false;
if (word.length === anagram.length)
{
   let arrayFromWord = Array.from(word);
   const stringOccurrencesOfLetters = getOcurrenceofLetters(arrayFromWord);
   const arrayLetters = Object.entries(stringOccurrencesOfLetters);
   const controlNumber = anagramChecking(word, anagram);
   const controlNumber2 = sumofOcurrence(arrayLetters);
   if (controlNumber === controlNumber2)
   {flag = true};
}
return flag;
}
function anagramChecking(word, anagram)
{
   Array.from(word)
   let counter = 0;
   for (i = 0; i<anagram.length; i++)
   {
      if(anagram.includes(word[i])){
         counter ++;
      }
   }
   return counter;
}
function getOcurrenceofLetters(strings)
{  
    const res= {};
    strings.forEach(letter => 
        {
             if (!res[letter]) {
               res[letter] = 1;
             }
             else res[letter]++;
        })
        return res;
}

function sumofOcurrence(ar)
{
    return ar.reduce((res, number) => res + number[1], 0);
}

console.log(isAnagram ("father", "rehaaf"));