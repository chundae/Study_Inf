// function returnFalse(){
//     console.log("False 함수")
//     return false;
// }

// function returnTrue(){
//     console.log("True 함수")
//     return true;
// }

// console.log("And 단락평가1")
// console.log(returnFalse() && returnTrue())
// console.log("And 단락평가2")
// console.log(returnTrue() && returnFalse())

// console.log("or 단락평가1")
// console.log(returnTrue() || returnFalse())


//단락평가 활용
function printName(person){
    const name = person && person.name;
    console.log(name || "person값이 없음")
}

printName();
printName({name : "ㅇㅁㅁ"})
/*
Truty || Truthy 하면 앞에 먼저 나온 Truthy한 값이 출력 
Truthy && Truthy이면 뒤에 나온 Truthy값이 출력된다.
*/