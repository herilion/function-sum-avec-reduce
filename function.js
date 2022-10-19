function printSum(num1, num2) {
    console.log(num1 + num2);
}
printSum(2, 8)
// multiplication
const mult = function (...m) {
    const result = m.reduce((acc, val) => acc *= val)
    console.log([m])
    console.log(result);
}
mult(2, 45);

//function addition avec reduce
const myFunction = (...m) => {
    const sum = m.reduce((acc, val) => acc += val)
    console.log([m])
    console.log(sum);
};
myFunction(43, 56, 45);
myFunction(2, 3, 4, 6, 7, 8, 9);