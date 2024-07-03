const max = Math.max(88, 99, 33, 2, 7, 77);

console.log(max);

const numbers = [3, 2, 5, 45, 5, 43, 90, 32];
const arrayMax = Math.max(...numbers);
console.log(...numbers);
console.log(88, 99, 33, 2, 7, 77);
console.log(arrayMax);


// use spread operator to copy wrong way
const nums = [4, 5, 54, 9];
const nums2 = nums;
nums2.push(12);

console.log(nums)
console.log(nums2)


// use spread operator to copy
const friends = [4, 5, 54, 9];
const bondhu = friends;
const dosto = [...friends]

console.log(dosto)

friends.push(12);
console.log(dosto)
console.log(friends)


// advanced
const sonkha = [...friends, 999];
console.log(sonkha);