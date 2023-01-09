////Task 1.1
const controle = [20, -10, 333, 1000, 552, 7, -7, 2, 1];
console.log(`result of sorting [20, -10, 333, 1000, 552, 7, -7, 2, 1] is [${evenOddSort(controle)}]`);
function evenOddSort(array)
{
    array.sort(function(element1,element2)
    {
        if (element1<0) element1=-element1;
        let res = element1%2 -element2%2;
        return res;
    });
    return array;
}

////Task 1.2
console.log(`result of sorting [20, -10, 333, 1000, 552, 7, -7, 2, 1] is [${oddEvenSort(controle)}]`);
function oddEvenSort(array)
{
    array.sort(function(element1,element2)
    {
        if (element1<0) element1=-element1;
        let res = element2%2 -element1%2;
        return res;
    });
    return array;  
}

///Task 1.3
console.log(`result of sorting [20, -10, 333, 1000, 552, 7, -7, 2, 1] is [${ evenAscOddDesc(controle)}]`);
function evenAscOddDesc(array)
{
    array.sort(function(element1,element2)
    {
        let res = 0;
        if (element1 % 2 == 0 && element2 % 2 != 0) {
            res = -1;
        } else if (element1 % 2 == 0 && element2 % 2 == 0) {
            res = element1 - element2;
        } else if (element1 % 2 !=0 && element2 % 2 !=0) {
            res = element2 -element1;
        }
        return res;
    });
    return array; 
}
///Task 2.1
const controle2 = [1, 2, 3, 4, 54, -4, -1, 11, 19, 24];
function getMin(array)
{
    const result = array.reduce(function (res, cur)
    {
        if (res<cur) {return res;}
        return cur;
    });
    return result;
}
console.log(`Minimum = ${getMin(controle2)}`);

///Task 2.2
function getMax(array)
{
    const result = array.reduce(function (res, cur)
    {
        if (res>cur) {return res};
        return cur;
    });
    return result;
}
console.log(`Maximum = ${getMax(controle2)}`);

///Task 2.3
function getAverage(array)
{
    const result = array.reduce(function (res, cur, index)
    {
        let total = res+cur;
        if (index === array.length-1)
        {return total/array.length}
        return total;
    })
    return result;
}
console.log(`Average = ${getAverage(controle2)}`);

///Task 2.4

function getMinMaxAvg(array) 
{
    let min = array[0];
    let max = array[0];
    let total = 0;
    return array.reduce(function (res, cur, index)
    {
        total = total+cur;
        min = min > cur ? cur : min;
        max = max < cur ? cur: max;
        if (index === array.length-1)
        {res.push(min, max, total/array.length)};
        return res;
    },[]);
}
  
console.log(getMinMaxAvg(controle2));
