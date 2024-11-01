//1. 원시타입 메모리

//p1의 데이터가 메모리에 저장
let p1 = 1;

//p2의 데이터는 p1의 데이터를 저장해서 메모리에 저장
let p2 = p1;

//p2 -> 2로 변경하면 이전에 p1의 데이터를 복사한 메모리에 갱신되는것이 아닌
//새로운 메모리에 p2 = 2라는 데이터가 메모리에 저장되게 됨
p2 = 2;

/*
즉 메모리가 1,2,3,...이있다고 하면
메모리 1 -> p1 = 1이 저장되고
메모리 2 -> p2 = p1 즉 p2 = 1이 저장
메모리 3 -> p2 = 2가 저장된다.

이때 메모리 2는 사라지지않고 그대로 남아있다.
원시타입 = 불변값이라고 하지만 값이 변경되지 않는다라는 의미의 불변이다
*/


//2. 객체타입의 메모리
let o1 = {name : "ㅁㅁㅁ"};
//o1 = x001로 저장되어있음

let o2 = o1;
// o2 = x001을 바라보도록 되는것임

let o3 = {...o1};

console.log(o1 === o2) ;
console.log(o1 === o3);