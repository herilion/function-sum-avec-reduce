function printSum(num1, num2) {
    console.log(num1 + num2);
}
printSum(2, 8)

const mult = function (n, m) {
    console.log(n * m);
}
mult(2, 45);

//function avec reduce
const myFunction = (...m) => {
    const sum = m.reduce((acc, val) => acc += val)
    console.log([m])
    console.log(sum);
};
myFunction(43, 56, 45)