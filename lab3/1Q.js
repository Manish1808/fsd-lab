function mergeArrays (a,b,c)
{
    return [...a,...b,...c];
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

// function mergeArrays (...a)
// {
//     return [].concat(...a);
// }
// console.log(mergeArrays([1, 2], [3, 4], [5, 6]));