## web Storage

- 웹 브라우저에 기본적으로 내장되어 있는 데이터베이스
- 별도의 프로그램 설치와 라이브러리 설치가 필요 없다.
- 자바스크립트 내장 함수만으로 접근 가능하다.


### Web Storage 종류
- SessionStorage
  - 브라우저 탭별로 데이터를 보관
  - 탭이 종료되기 전에는 데이터 유지(새로고침)
  - 탭이 종료되거나 꺼지면 삭제됨
    - ```javascript
      sessionStorage.setItem(key,value);
      sessionStorage.getItem(key);
      ```
    
- LocalStorage
  - 사이트 주소별로 데이터 보관
  - 사용자가 직접삭제하기 전까지 데이터 보관
  - 기본적으로 문자열 형태로 데이터를 저장하기 때문에 객체 타입으로 저장하면 제대로 저장이되지 않는다. `{name: "aaaa"}`형태로 저장시 `[object, Object]`로 저장됨.
  - 그래서 `JSON.stringify`를 사용해서 문자열로 변경 후 저장을 진행한다. `localStorage.setItem('person', JSON.stringify({name : "aaa"}))`
  - 변경 이후 불러올때는 `console.log(JSON.parse(localStorage.getItem('person')));`를 사용해서 객체로 변환 시켜줘야 한다.
    - ```javascript
      localStorage.setItem(key,value);
      localStorage.getItem(key);
      ```
```javascript
    localStorage.setItem('test', 'hello');
    localStorage.setItem('person', JSON.stringify({name : "aaa"}))
    
    console.log(localStorage.getItem('test'));
    console.log(JSON.parse(localStorage.getItem('person')));

    localStorage.removeItem("test");//벡스페이스로 지우기 가능
```
