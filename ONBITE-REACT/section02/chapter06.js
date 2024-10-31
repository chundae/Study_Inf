//1. 배열 순화
let arr = [1, 2, 3];

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
}

// 1-2 for of 반복문
for(let item of arr){
    // console.log(item);
}



//2. 객체 순회
let person ={
    name : "ㅁㅁㅁ",
    age: 26,
    hobby: "테니스",
};

let keys = Object.keys(person);

for(let key of keys){
    const value = person[key];
    // console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for(let value of values){
    // console.log(value);
}


//2.3 for in
// -> for of와 유사함
for(let key in person){
    const value = person[key];
    console.log(key);
}
