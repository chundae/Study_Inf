//1. 객체의 생성
let obj1 = new Object() //객체 생성자
let obj2 = {} //객체 리터럴


let person = {
    name : '김기석',
    age : 26,
    hobby: ['a', 'b', 'cz'],
    job : "BE Developer",
    extra: {},
    10: 20,
    "like cat" : true,
};

// console.log(person.age);
// console.log(person.hobby);

let name = person.name;
let age = person["age"];
console.log(age)

let property = 'hobby';
let hobby = person[property];
console.log(hobby)