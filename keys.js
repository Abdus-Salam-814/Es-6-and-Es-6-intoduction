const glass = {
    name: 'glass',
    color: 'green',
    price: 12,
    isCleaned: true
};

console.log(glass);

const keys = Object.keys(glass);
console.log(keys);

const values = Object.values(glass);
console.log(values);


const pair = Object.entries(glass);
console.log(pair);

// Object in element delete this code
// Old Output: { name: 'glass', color: 'green', price: 12, isCleaned: true }
delete glass.isCleaned;

console.log(glass); // new output: { name: 'glass', color: 'green', price: 12 }


// delete anather version

const {isCleaned, color, name, ...shortGlass} = glass;
console.log(shortGlass);


// freeze 
// Object.freeze(glass);
Object.seal(glass);
console.log(glass);

delete glass.color;
console.log(glass);

glass.name = 'Bangladesh';
console.log(glass);


