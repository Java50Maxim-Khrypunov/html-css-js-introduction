const array = [10, 20, 30, -10, 11, 100];
const index = array.indexOf(30);
console.log(index);
const res = array.splice(index);
console.log(array);
array.splice(index,0,-10,-20);
console.log(array);
// array.splice(index,2,-20);
// console.log(array);
const ar1 = [40,200];
// array.splice(index, 1,...ar1);
array.splice(index, 1,...ar1);
console.log(array);
// const res = array.splice(index,1);
// console.log(res);
// const numbersPerPage = 2;
// const page = 2;
// const firstIndex = (page-1)*numbersPerPage;
// const pageNumbers = array.slice(firstIndex, firstIndex+numbersPerPage);
// const copy = array.slice(2,5);
// console.log(copy);
// const ar1 = array.map(multiply2);
// function multiply2(number)
// {
//     return number * 2;
// }
// // console.log(ar1);
// const ar2 = array.map(function (number, index)
// {
// return index + 1 + ". " + number;
// });
// console.log(ar2);
// const ar3 = array.map(function(number)
// {
// return `<li>${number}</li>`
// })
// const ulElement = `<ul>${ar3.join('')}</ul>`;
// console.log(ulElement);
// Array.from(String);

// const min = 5;
// const max = 15;
// const ar4 = array.filter(function(number)
// {
//     return number >= min && number <=max;
// });

// console.log(ar4);

// const ar5 = array.filter(function(number, index)
// {
//     return number% 2 === 0 && index%2 === 0;
// });

// console.log(ar5);
