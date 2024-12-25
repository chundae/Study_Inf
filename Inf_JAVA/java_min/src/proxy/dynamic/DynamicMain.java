package proxy.dynamic;

import java.lang.reflect.*;

public class DynamicMain {

    public static void main(String[] args) {

        // newProxyInstance() 메서드로 동적으로 프록시 객체를 생성할 수 있다.
        Animal rabbitProxy = (Animal) Proxy.newProxyInstance(
                Animal.class.getClassLoader(), //대상 객체의 인터페이스의 클래스 로더
                new Class[]{Animal.class}, // 대상 객체의 인터페이스
                new InvocationHandler() { //프록시 핸들러
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        Object target = new rabbit();

                        System.out.println("---eat 호출 전 ---");

                        Object result = method.invoke(target, args); //타겟 메서드 호출
                        System.out.println("---eat 호출 후---");
                        return result;

                    }
                }
        );

        rabbitProxy.eat();
    }
}
