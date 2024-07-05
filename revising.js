// video - 01

// var  no reason to use var
// let allow it to reassign
// const: do not allow it to reassogn


// Array change index value and push pop 

const myArray = [8, 99, 24, 93 ];

myArray[2] = 100;

console.log(myArray);

// change objsect value and key

const myObject = {
    name: 'Abdus Salam',
    age: 26,
    nasnality: 'Bangladesh',
   
}

console.log(myObject);

myObject.age = 27;
console.log(myObject);

myObject.dash = myObject.nasnality;
console.log(myObject);

delete myObject.nasnality
console.log(myObject);

function add(num1, num2){
    return num1 + num2;
}

const result = add(222, 8);

console.log(result);

// sate defoult value in function  Default --> if value is not provide, take this as a default.

function add2(num1= 0, num2= 0){
    console.log(num1, num2);
    return num1 + num2;
}

const result2 = add2(22, );

console.log(result2);

// set Defoult string value in function

function fullName(first='', last=''){
    return first + " " + last;
}

 const fullNameResult = fullName('Abdus',);

 console.log(fullNameResult);

 function friends(numbers = []){
        let numSum = 0;
    for (const num of numbers){
        console.log(num);
        numSum = numSum + num;
    } 

    console.log('Your max Number is:',Math.max(...numbers), 'And Your minimum number is:', Math.min(...numbers))
    return numSum;
 }

 const resultFor = friends([2, 5, 8, 998,  888, 75, 65]);
 console.log(resultFor)

 //set Defoult object value

function person(human = {}){

    let totalName = '';

    for (const key in human){
        const name = human[key]

        totalName = totalName+ " " + name;
    }

    return totalName;
}

const resutlObject = person({first: 'lora', secend: 'mehjabin', therd: 'samoli', fourth: 'konok', fifth: 'mahbub'});
console.log(resutlObject);



// get object valooue and property/key

const myGreatObject = {
    name: 'programing hero',
    batch: '6th',
    roll: '218792',
    reg: '2899781066'

}

const keys = Object.keys(myGreatObject);

console.log(keys);

const values = Object.values(myGreatObject);
console.log(values);

const keysAndValueBoth = Object.entries(myGreatObject);
console.log(keysAndValueBoth);



const deleteFreezSealObject = {
    name: 'papia aktar Bristy(Fatima)',
    age: '18+',
    address: 'Rajshahi'


}

console.log(deleteFreezSealObject);
// Object.freeze(deleteFreezSealObject)
delete deleteFreezSealObject.name;
Object.seal(deleteFreezSealObject);
deleteFreezSealObject.name = 'Fatima'
console.log(deleteFreezSealObject);


// string carecters for loop

const myFavorateStrong = 'amar sonar bangla ami tomoy valo basi';

for(const crecter of myFavorateStrong){
    console.log(crecter);
}


