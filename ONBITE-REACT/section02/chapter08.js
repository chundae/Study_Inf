//5가지 요소 순회 및 탐ㄴ색 메서드
//1. forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1,2,3];

arr1.forEach(function (item, idx, arr){
    // console.log(idx, item*2);
});


let doubledArr = [];

arr1.forEach((item)=>{
    doubledArr.push(item*2);
});
// console.log(d)



//2. includes
//배열에 특정 요소가 있는지 확인하는 요소 -> 반환은 bool
let arr2 = [1, 2, 3];
const result = arr2.includes(3);

console.log(result);

//3. indexOf(얕은 비교) 원시타입
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];

let index = arr3.indexOf(2);
console.log(index);
// 해당 인덱스가 존재하지 않으면 -1 를 반환

//4. findIndex(깊은 비교) 객체타입 
//모든 요소를 순회하면서 콜백함수를 만족하는 그러한
//특정 요소의 인덱스(위치) 반환하는 메서드 

let arr4 = [1,2,3];
let findedIndex = arr4.findIndex((item) => {
    if(item === 2) return true;
});

console.log(findedIndex);


//5. find
//모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name : "리엑트"},
    {name : "인프런"},
];

const finded = arr5.find(
    (item) => item.name === "리엑트"
);

console.log(finded);
