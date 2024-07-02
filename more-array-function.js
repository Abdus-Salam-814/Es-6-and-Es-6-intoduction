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