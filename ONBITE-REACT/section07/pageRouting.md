## page Routing
페이지를 렌더링하는 모든 과정을 말한다.

### Routing이란
기본적으로 네트워크에서 경로를 선택하는 프로세스를 말한다.
다양한 주소의 요청이 들어왔을때 각각 주소에 맞는 페이지를 렌더링 시켜주는 작업이다.


### 렌더링 과정
1. 사용자가 블로그에 접속 (client)
2. client 에서 서버로 요청을 전송
3. 서버에서 블로그 페이지를 반환
4. client에서 블로그 페이지 렌더링
5. 사용자에게 출력됨.

순서로 렌더링이 진행되고 이 모든 과정을 Routing이라고한다.


---
### MPA - Multi Page Application
웹 앱을 개발하는 전통적인 방식 -> 여러개(Multiple) Page를 사용한 Application

#### 작동방식
- 새로운 페이지를 요청할때마다 서버에서 렌더링된 정적 리소스를 다운 받아 사용한다.
- 페이지를 이동하거나 새로고침하면 전체 페이지를 다시 렌더링 한다.
- MPA는 SSR(Server side Application) 방식으로 렌더링을 진행한다.

#### 장점
- SEO친화적
  - 여러 페이지를 생성하므로 훨씬 많은 수의 키워드를 타겟팅할 수 있다.

- 확장정
  - 다중 페이지로 원하는 만큼 페이지를 추가할 수 있다.

#### 단점
- 페이지 이동시 느린 속도
  - 사용자가 새로운 페이지를 이동하면 전체 페이지를 다시 렌더링하기 때문에 속도가 느리다.
- 복잡한 개발
  - 개발자는 클라이언트측과 서버 측 모두 프렝미워크를 사용해야한다.
- 보안 및 유지보수
  - 모든 페이지가 안전한지 확인해야하는데 있어 페이지가 많이 지속적인 유지보수에 어려움이 있다.

### SPA - Single Page Application
모던 웹의 패러다임이며 한개(Single) Page를 사용한 Application

서버로부터 새로운 페이지를 불러오지않고 현재 페이지를 동적으로 재 작성함으로써 사용자와 소통하는 사이트를 말한다.
<br>
SPA의 가치는 UX향상에 있으며 부가적으로 애플리케이션 속도의 향상도 기대할 수 있어 Mobile First전략에 부합하다.

#### 작동방식
- SPA는 웹 애플리케이션에 필요한 모든 정적 리소스를 최초 접근시 단 한번만 다운로드한다.
- 이후 새로운 페이지 요청시 페이지 갱신에 필요한 데이터만 전달받아 페이지를 갱신한다. 기존 페이지를 수정하는 방식
- SPA를 일반적으로 CSR(Client Side Rendering)방식으로 렌더링한다.

#### 장점
- 속도 및 응답시간
  - 전체 페이지를 다시 렌더링하지않고 변경되는 부분만 갱신하므로 새로고침이 발생하지 않는다.
- 개발 간소화
  - 서버에서 페이지를 렌더링하기 위해 코드를 작성할 필요가 없다.
- 로컬 스토리지 캐시
  - 하나의 요청만으로 데이터를 저장하고 다시 전달받은 데이터를 재사용이 가능하다.

#### 단점
- 초기 구동 속도
  - SPA는 최초 접근 시 모든 데이터를 다운로드하기 떄문에 초기 구동속도가 상대적으로 느림
- SEO(검색엔진 최적화) 이슈
  - Js로 구축을 하기 떄문에 JS가 읽지 못하는 검색엔진에 대해서 크롤링이 되지않아 색인이 되지않는 문제가 발생한다.
- 보안 문제
  - XSS(교차 사이트스크립팅)로 인해 공격자가 다른 사용자가 웹 응용 프로그램에 클라이언트 측 스크립트르 삽입할 위험이 있다.



---
<br>

## React Router DOM
MPA방식이 아닌 SPA방식으로 브라우저를 동작하기위해 사용하는 React 라이브러리이다.<br>
SPA방식을 사용하기 때문에 각 페이지가 개별적으로 URL을 가지도록해 사용자의 경험을 개선하며
페이지 이동을 새로고침 없이 즉각적인 화면을 전환하여 성능을 최적화한다.<br>
React 상태관리와 조합하여 일관된 데이터의 흐름을 유지 가능하다.


### `<BrowserRouter>`
- 브라우저의 현재 주소를 저장하고 변경을 감지하는 역할
- 해당 Router에 저장되는 모든 데이터는 Provider를 사용하여 모든 컴포넌트에 Context형태로 전송을 한다
- Main.jsx페이지에 App컴포넌트를 감싸 모든 컴포넌트의 최상위에서 Context를 설정한다.
```javascript
createRoot(document.getElementById('root')).render(
        //브라우저의 현재 주소를 저장하고 변경을 감지하는 역할 <BrowserRouter>
        <BrowserRouter>
          <App />
        </BrowserRouter>
)
```
<br>

### `<Routes> / <Route>` 
라우트의 그룹을 정의한다.
```javascript
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```
- 원하는 경로 path속성과 연결할 컴포넌트 element 속성을 사용하여 라우팅을 진행한다.

<br>

### `<Link>`
기존 HTML의 `<a>` 태그와 비슷하지만 페이지 전체를 새로고침하지 않고 URL을 변경하는 React Router용 `<a>`태그라고 생각하면된다.
```javascript

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```
to속성 에 경로를 설정하여 사용한다.

###
`<useNavigate>`
특정 조건에 만족하면 자동으로 페이지를 이동하도록 하기 위해 사용한다.
```javascript

function Login() {
    //선언이후
  const navigate = useNavigate();
//이벤트 핸들러를 통해 조건식을 사용하여 페이지 이동을 구현한다.
  const handleLogin = () => {
    // 로그인 성공 후 홈으로 이동
    navigate('/');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

<br>

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

<br>

- Query String (`?` 뒤에 변수명과 값 명시)
```
~/search?q=검색어
```

```javascript
const [params, setParams] = useSearchParams();
console.log(params.get("value"));
```

검색어 등 자주 변경되는 값을 주소로 명시하기위해 사용된다.

<br>

- useLocation

```javascript
import { useLocation } from 'react-router-dom';

function ShowLocation() {
  const location = useLocation();

  return <div>Current URL: {location.pathname}</div>;
}
```
현재 경로 객체를 반환하며 URL 경로 쿼리파리미터, 해시 등을 포함하여 사용한다.
특정 페이지에서 URL 상태를 체크할때 유용하다

