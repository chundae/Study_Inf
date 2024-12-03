package lang.object;

//묵시적으로 Object 상속 -> java의 최상위 클래스 = Object
public class Parent extends Object {

    public void ParentMethod() {
        System.out.println("Parent.ParentMethod");

        /**
         * <h4>다형성의 기본 구현</h4>
         * <p>
         *     부모는 자식을 담을 수 있다. {@code Object}는 모든클래스의 부모 클래스이다. -> 모든 객체를 참조가능
         *     {@code Object}클래스는 다형성을 지원하는 기본적은 메커니즘을 제공한다. 모든 자바 객체는 {@code Object}타입으로
         *     처리가능하며 이는 객체를 통합적으로 처리할 수 있도록 해준다.
         * </p>
         * {@code Object}는 쉽게 말해 모든 객체를 다 다음을수 있다. 타입이 다른 객체들을 어딘가에 보관해야 한다면,
         * {@code Object}에 보관하면된다.
         */

    }


}



