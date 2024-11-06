# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### JSX 주의 사항
1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
2. 숫자, 문자열, 배열 값만 렌더링 된다.
3. 모든 태그는 닫혀있어야한다.
4. **최상위 태그는 반드시 하나여야한다**
   
    - 최상위 태그로설정할 것이 없다면 `<> / </>` 빈 태그를 사용하면 된다.


### 리엑트 값 전달 Props
1. `{ text, color = 'black', children}`처럼 값을 분해해 사용이 가능하다.


### 이벤트 핸들러 EvenHandler
1. `onClick={}`을 사용하여 해당 `div`와 같은 객체에 이벤트가 발생했을떄 함수를 실행한다.
   2. 이벤트 핸들러는 `onClick`을 포함하여 다양하게 있다. 추가로 마우스의 커서가 올라갔을떄 이벤트를 출력이 가능하다.`onMouseEnter()`


### State
1. state?
   
   - 현재 가지고 있는 형태나 모양을 정의한 것
   - 변화 할 수 있는 동적인 값
2. React 컴포넌트는 자신의 형태를 정의할 수 있는 state를 가지고 있음
3. state는 React 컴포넌트의 현재 상태를 보관하는 변수이며 statce의 값에 따라 렌더링되는 UI가 결정된다.

   - State의 변화가 감지가 되면 즉 컴포넌트의 상태 변화가 감지되면 자동으로 리렌더링을 진행한다.
   - 여러개의 State를 갖고 있을수 있다. (예. 전구의 점등상태, 전구의 고장 유무, 전구의 더러움유무 등)
4. 리렌더링 조건

   - state의 상태가 변경 시
   - props의 값을 전달 받는 경우
   - 부모의 컴포넌트가 state 상태가 변경되면 자식 컴포넌트도 리렌더링 진행

### useRef
- 새로운 Reference 객체를 생성하는기능
- `const refObject = useRef();` 컴포넌트 내부의 변수
- useRef는 어떤 경우에도 리렌더링을 유발하지 않음(렌더링에 영향이 없음)
- 특정 요소에 접근하여 조작을 할 수 있음.

### React Hooks
- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 만들어주는 기능

  - 과거에는 Class 컴포넌트에서만 리엑트의 모든 기능을 사용할 수 있었고, Function 컴포넌트에서는 UI 렌더링만을 지원했었음.
  - class 컴포넌트는 문법이 복잡하여 Function 컴포넌트에서 사용하고싶어ㅅ 했음
  - 해서 만들어진 것이 바로 React Hooks이다.
- React Hooks 는 우리가 공부하면서 사용했던 `useState()`와 같은 것이 훅으로 기존 class컴포넌트에서는 state로서 사용되었다.

  - 위 `useState()`처럼 기존 Class 컴포넌트에서 사용하는 기능에 Use 를 붙힘으로서 함수 컴포넌트에서도 사용할 수 있게됨.
- 함수 컴포넌트 내부에서만 사용이 가능하고 조건문, 반복문에서는 호출이 불가능하다는 특징이 있다.
- 