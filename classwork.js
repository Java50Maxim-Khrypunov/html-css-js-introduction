// let str = "123m";
// let number = parseInt(str) + 10;
// let str1 = "ff.5";
// let numInt = parseInt(str1, 16);
// let numFloat = parseFloat(str1);

function myParseInt(str, base)
{
base = base||10;
let res = 0;
for (let i = 0; i < str.length; i++)
{
res = res * base + getCod(str[i]);
}
return res;
}

function getCod(symbol)
{
    symbol = symbol.toLowerCase();
    const CodeA = 'a'.charCodeAt();
    const res = symbol <= '9' ? + symbol : symbol.charCodeAt() - CodeA + 10;
    return res;
}
let str1 = "ff";
let str2 = "123";
let str22 = "Java";
let str3 = "123m";
let str4 = "123.5";
let num = parseInt(str1, 16);
let myNum = myParseInt(str1, 16);
num = parseInt(str2);
myNum = myParseInt(str2);
num = parseInt(str22, 36);
myNum = myParseInt(str22, 36);
num = parseInt(str3);
myNum = myParseInt(str3);
num = parseInt(str4);
myNum = myParseInt(str4);

let number = 255;
let str = "" + number;
str = number.toString(16);

function MytoString(number, base)
{
    let res = " ";
    base = base || 10;
    number  = Math.abs(number);
    do
    {
    let digit = number % base;   
    const symbol = getSymbol(digit);
    res = symbol + res;
    number = Math.trunc (number / base);
    }
    while (number!=0);
    return res;
}
function getSymbol (digit)
{
const codeA = "a".charCodeAt();
let symbol;
if (digit < 10 ) { symbol = ""+ digit;}
else 
{
    const codeAscii = digit - 10 + codeA;
    symbol = String.fromCharCode(codeAscii);
}
return symbol;
}
let num100 = 990500;
let str100 = num100.toString();
let mystr100 = MytoString(num100);
str100 = num100.toString(36);
mystr100 = MytoString (num100, 36);
num100 = 123.45;
str100 = num100.toString(16);
mystr100 = MytoString (num100, 16);
console.log (str100, "=", mystr100);