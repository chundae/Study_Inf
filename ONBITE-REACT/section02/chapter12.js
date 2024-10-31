// function add(a,b, callback){
//     setTimeout(()=>{
//         const sum = a + b
//         callback(sum);
//     }, 3000)
// }

// add(1,2, (value)=>{
//     console.log(value);
// });

//음식을 주문하는상황
function orderFood(callBack) {
    setTimeout(()=>{
        const food = "돼지갈비";
        callBack(food);
    }, 2000);
}
function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood)
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `얼은 ${food}`;
        callback(freezedFood);
    }, 2000);
}

orderFood((food) => {
    console.log(food);
    
    cooldownFood(food, (cooldownedFood) =>{
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood =>{
            console.log(freezedFood);
        }))
    })
});




