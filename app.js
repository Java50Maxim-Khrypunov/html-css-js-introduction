const array = [123, 9, 28, 3, 44, 27, 1, 2, 5, 56, -7];
array.sort(function(e1,e2)
{
    //let res = e1.toString().length-e2.toString().length;
    if (e1<0) e1=-e1;
    let res = e1%2 -e2%2;
    if (!res)
    {res = e1-e2;
    }
    return res;
});
console.log(`result of sorting [123, 9, 28, 3, 44, 15] is ${array}`);

const array1 = [1,2,3,4,5];
console.log(array1.length)
function sum(array) 
{
    const res = array.reduce(function (res, cur)
    {
        let total = res+cur;
        return total/array.length
    })
    return res;
}
