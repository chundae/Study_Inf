function funcA(){
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() {
    // console.log("funcB")
};
varB();

let varC = () => {
    console.log("funcC")
};
varC();
