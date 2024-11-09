## React Context
컴포넌트간의 데이터르 전달하는 또 다른 방법
기존 Props의 단점을 해결할 수 있음

Context -> 데이터 보관소(객체)

#### Props단점 - Props Drilling
- 부모에서 자식으로만 데이터를 전달만 가능함.

  - 계층구조로서 부모 -> 자식간 교환은 자유롭지만 부모 ->손자 관게를 다이렉트로 Props를 전달 할 수 없음.