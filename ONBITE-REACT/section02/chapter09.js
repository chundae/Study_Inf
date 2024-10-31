//5가지 배열 변형 메서드

//1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "aaa", hobby:"running"},
    {name: "bbb", hobby:"reading"},
    {name: "ccc", hobby:"reading"},
]

const readingPeople = arr1.filter((item) =>{
    if(item.hobby === "reading")return true;
});

// console.log(readingPeople)

 
// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult = arr2.map((item, idx, arr) =>{
    return item*2;
});

// console.log(mapResult)

const mapName = arr1.map((item,idx ,arr)=>{
    return item.name;
});

// console.log(mapName);


//3. sort
//배열을 사전순으로 정렬하는 메서드

let arr3 = ['b', 'c', 'd', 'f', 'a'];
arr3.sort();

console.log(arr3);

let arr4 = [10,3,2,56];
arr4.sort((a,b) => {
    if(a > b){
        return 1;
    }else if(a <b){
        return -1;
    }else {
        return 0;
    }
});
console.log(arr4);


//4. toSorted
//원본 배열은 냅두고 새로운 배열로 반환
let arr5 = ['b', 'c', 'a'];

const sot = arr5.toSorted();

console.log(arr5);
console.log(sot);

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ['hi', 'im', 'chundae'];

const arrjoin = arr6.join(" ");
console.log(arrjoin);


