//1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

//four처럼 배열의 길이와 다르게 분해할경우 기본값을 설정할 수 있음.
let [one, two, three, four = 4] = arr;

// console.log(one, two, three, four)

//2. 객체의 구조 분해 할당
let person = {
    name: "김기석",
    age : 26,
    hobby: "running",
};

let {
    name, 
    age: myAge, 
    hobby, 
    extra= "hello"
} = person;

console.log(name, myAge, hobby, extra);

//3. 객체 구조분해 할당을 이용해서 함수의 매개변수 받는 방법
const func = ({name, age, hobby, extra})=>{
    console.log(name, myAge, hobby, extra);

}

func(person);