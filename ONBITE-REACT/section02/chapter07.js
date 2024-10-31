//6가지의 요소 조작 메서드


//1. push 메서드
// 배열의 맨뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];

const newLength = arr1.push(4,5,6,7);
console.log(arr1)
console.log(newLength);



//2. pop
//배열의 맨뒤에 있는 요소를 제거하고, 반환
let arr2 = [1,2,3,4];
const popedItem = arr2.pop();

console.log(popedItem);


//3. shift
//배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1,2,3,4];
const shiftedItem = arr3.shift();

console.log(shiftedItem);


//4. unShift
//배열의 맨앞에 새로운 요소를 추가하는 메서드
let arr4 = [2,3,4];
const unShiftItem = arr4.unshift(1);

console.log(arr4);
console.log(unShiftItem);


//5. slice
//배열의 특정범위를 잘라서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
let sliced = arr5.slice(2,5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-2);

console.log("slice : " + sliced)
console.log("sliced2 : " + sliced2)
console.log("sliced3 : " + sliced3)


//6. concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배영을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7);

console.log(concatArr);