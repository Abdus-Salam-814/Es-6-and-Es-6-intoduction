// Default ----> if value is not provide, take this as a default


function add(num1=0, num2=0){
    const result = num1 + num2;
    console.log(num1, num2)

    return result;
}

// const sum = add(5, 6);
// const sum = add(5, );
const sum = add( );
console.log(sum);

// Example of String

function fullName(firstName="", lastName=""){
    const result = firstName + " " + lastName;
console.log(firstName, lastName)
    return result;
}

// const fullNameResult = fullName('Abdus', 'salam');
const fullNameResult = fullName('Abdus',);
console.log(fullNameResult);