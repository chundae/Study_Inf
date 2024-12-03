## 의존관계

#### 정적 의존관계
정적 의존관계는 컴파일 시간에 결정되며, 주로 클래스 간의 관계를 의미한다.
프로그램을 실행하지 않고 클래스 내에서 사용하는 타입들만으로 의존관계를 쉽게 파악할 수 있다.

#### 동적 의존관계
동적 의존관계는 프로그램을 실행하는 "런타임"에서 확인할 수 있다.
어떤 객체가 전달될지는 실행해야 확인이 가능하고 이렇게 런타임에 어떤 인스턴스를 사용하는지를
나타내는 것이 동적 의존관계이다.
```java
public class ObjectPrinter{
    //여기서 obj에 인자로 어떤 객체가 넘어오는지는 런타임 내에서만 확인이 가능하다.
    public static void Printer(Object obj) {
        String string = "출력할 객체 : " + obj.toString();
        System.out.println(string);
    }
}
```


## Equals() 메서드 구현 규칙
- 반사성(Reflexivity) : 객체는 자기 자신과 동등해야한다. (x.equals(x)는 항상 `true`)
- 대칭성(Symmetry) : 두 객체가 서로에 대해 동일하다고 판단하면, 이는 양방향으로 동일해야한다. 
  
  - `(x.equlas(y))`가 `true`이면 `y.equals(x)`도 `true`

- 추이성(Transitivity) : 만갹 한 객체가 두 번째 객체와 동일하고, 두 번째 객체가 세 번째 객체와 동일하다면, 첫 번째 객체는 세 번째 객체와도 동일해야 한다.
- 일관성(consistency) : 모든 객체는 `null`과 비교했을 때 `false`를 반환해야한다.

