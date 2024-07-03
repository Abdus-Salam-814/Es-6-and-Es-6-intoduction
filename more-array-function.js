const defference = (x, y) => x - y;
const multiply = (first, secend, third) => first * secend
 * third;

const getAge = (person) => person.age;
const student = {
    name: 'Hublu mia',
    age: 12
}

const age = getAge(student);
console.log(age)


const getThird = numbers => numbers[2];

const numberOfArray = [112, 33, 5555, 777, 888, 9, 3];
const third = getThird(numberOfArray);
console.log(third)

// Noo parameter

const getPI = () => Math.PI;
const pi = getPI()
console.log(pi)

// latge arrow function. if you want to get anything returned form this function. then you have to use the return keyword

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}


const mathHere = doMath(225, 41, 70);
console.log(mathHere);