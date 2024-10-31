const promise = new Promise((resolve, reject) => {
  //비동기 작업 실행하는 함수
  //executor

  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("숫자가 아님");
    }
  }, 2000);
});

//then 메서드
// -> 그 후에
// then메서드는 promise메서드가 성공했을때만 실행되는 메서드

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
