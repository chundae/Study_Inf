//함수선언
function getArea (width, height){
    function another(){ //중첩함수
        console.log("another")
    }
    another();
    let area = width * height
    return area;
}

let result1 = getArea(10, 20);
console.log(result1)

let result2 = getArea(20, 20);
console.log(result2)

let result3 = getArea(40, 20);
console.log(result3)


