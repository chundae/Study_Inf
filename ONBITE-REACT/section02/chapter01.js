//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

let FalsyArr = [f1,f2,f3,f4,f5,f6,f7];

for(let idx = 0; idx <= FalsyArr.length; idx++){
    if(!FalsyArr[idx]){
        console.log(FalsyArr[idx], "falsy")
    }
}
//2. Truthy한 값
// -> 7가지의 Falsy한 값을 제외한 모든 것

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

let TrueArr = [t1,t2,t3,t4,t5]

for(let idx = 0; idx <= TrueArr.length; idx++){
    if(TrueArr[idx]){
        console.log(TrueArr[idx], "Truthy")
    }
}

//3. 활용사례

function printName(person) {
    if(!person){
        console.log("person값이 없음")
        return
    }
    console.log(person.name)
}

let person = {name : "김기석"};

printName(person);