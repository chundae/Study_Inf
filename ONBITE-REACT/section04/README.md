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
1. 