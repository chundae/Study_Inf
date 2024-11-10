## page Routing
페이지를 렌더링하는 모든 과정을 말한다.

### 렌더링 과정
1. 사용자가 블로그에 접속 (client)
2. client 에서 서버로 요청을 전송
3. 서버에서 블로그 페이지를 반환
4. client에서 블로그 페이지 렌더링
5. 사용자에게 출력됨.

순서로 렌더링이 진행되고 이 모든 과정을 Routing이라고한다.


### MPA - Multi Page Application
서버가 여러개의페이지를 가지고 있어 client와 통신하는 형태를 말함.
많은 서비스가 사용하는 전통적인 형태

동작방식이 매우 직관적이다.

서버측에 렌더링이 되어있는 페이지를 client에게 반환한다고해서 "Server side Rendering"이라고함.

모든 페이지를 통신할떄마다 모두 지우고 새로운 페이지를 렌더링을 진행하기 때문에 한번의 새로고침이 발생한다.
index.html에서 메뉴를 이동하면 새로운 xxx.html페이지로 리렌더링이 완전히 새롭게 진행되는 것이 특징이다.

- 단점
  - 페이지의 이동이 매끄럽지 않고 비효율적이다.
  - 다수의 사용자 접속시 서버의 부하가 심하다.

  
위와 같은 MPA 방식은 React에서 사용하지 않음.


### Single Page Application - SPA
React에서 사용하는 페이지 렌더링 방식
페이지이동이 매끄럽고 효율적이며, 다수의 사용자가 접속해도 크게 상관이 없음.

Single이라는 말처럼 페이지를 단 한개만 가지고 있다.



## React Router
... 정리 예정



## Dynamic Segments - 동적 경로

### URL Parameter & Query String
- URL Parameter (`/`뒤에 아이템 ID를 명시)
```
~/product/1
~/product/2
~/product/3
```
```javascript
<Route path="/diary/:id" element={<Diary/>} />
```
아이템의 ID 등의 **변경되지 않는 값**을 주소로 명시하기 위해 사용된다.

- Query String (`?` 뒤에 변수명과 값 명시)
```
~/search?q=검색어
```

```javascript
const [params, setParams] = useSearchParams();
console.log(params.get("value"));
```


검색어 등 자주 변경되는 값을 주소로 명시하기위해 사용된다.
