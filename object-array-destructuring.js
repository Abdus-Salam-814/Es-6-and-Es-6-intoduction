const actor = {
    name: 'Ananata',
    age: 30,
    phone: "01518674860",
    money: 1228308
}

const phone = actor.phone;
console.log(phone)

const {phone: phoneNumber, age, name} = actor;


console.log(phoneNumber)
console.log(age)
console.log(name)

// array destructuring.

const numbers = [12, 25, 88, 888, 99,]

const [x, y,,,z] = numbers;

console.log(x, y, z)

// advanced 
 function doubleThem(a, b){
    return [a*2, b*2]
 }

 const [first, secend] = doubleThem(6, 9);
 console.log(first, secend);