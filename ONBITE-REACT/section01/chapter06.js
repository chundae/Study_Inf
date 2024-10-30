//1. 묵시적 형변환 (자동 형변환)
// => 자바스크릅트 엔진이 알아서 형변환하는것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

//2. 명시적 형변환
// -> 프로그래머 내장 함수등을 이용해서 직접형 변환하는 것.

let str1= "10";
let strToNumber = Number(str1);

let str2 = "10개"
let strToNumber2 = parseInt(str2)
console.log(strToNumber2);