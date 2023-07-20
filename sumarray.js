function simpleArraySum(ar) {
    // Write your code here
    let sum = ar.reduce(function (x, y) {
    console.log( x + y);
}, 0);
console.log(sum);
}
simpleArraySum([1,3,4,5])