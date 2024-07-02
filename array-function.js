// function declaration
function add(a, b){
    const result = a + b;
    return result;
}
const sum = add(44, 6);
console.log(sum);

// function expression
const add2 = function(a, b){
    const result = a + b;
    return result;
}
const sum2 = add2(44, 7);
console.log(sum2);

// array function  add

const add3 = (a, b) => a + b;

const sum3 = add3(55, 5);
console.log(sum3);


// add array function

const add4 = (a, b, c, d) => a + b + c + d;

const sum4 = add4(11, 22, 33, 44);
console.log(sum4);


// multiply array functon

const multiply = (a, b) => a * b;
const mult = multiply(22, 3);
console.log(mult)