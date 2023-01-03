/// Task2
const matrix = [ [ 5, 0 ], [ 5, 2 ], [ 1, 3 ] ];
console.log(matrix);

function transpMatrix(matrix)
{
const newMatrix = [];
let rows = matrix[0].length;
let columns = matrix.length;
for (let i = 0; i < rows; i++)
{
    newMatrix.push([]);}
for (let i = 0; i < columns; i++){
    for (let j = 0; j < rows; j++)
    {
        newMatrix[j].push(matrix[i][j]);
    }}
    return newMatrix;
}


const result = transpMatrix(matrix);
console.log(result);

/// Task1
function getRandomNumber (min, max)
{
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc (Math.random() * (max - min + 1));
}
let RandomNumber = getRandomNumber (0, 1);

const ar1 = [0, 1, 0, 1, 1, 0,];

function getHtmlUl(ar)
{
const HTML = [];
let strUl = '<ul class="list_class">';
let strLi = '<li class=""item_clas">';
let end = '</div></li></ul>';
HTML.push(strUl);
HTML.push(strLi);
let strClass ="";
for (let i = 0; i<ar.length; i++)
{
    if (ar[i]===0) {strClass="white";}
    else {strClass="black";}
    let color = `class = "${strClass}"`;
    let div = '<div ';
    HTML.push(div);
    HTML.push(color);
}
HTML.push(end);
let result = HTML.join("");
return result;
}
let resHTML = getHtmlUl(ar1);
console.log(resHTML);

