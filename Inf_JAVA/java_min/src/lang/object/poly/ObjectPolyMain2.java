package lang.object.poly;

public class ObjectPolyMain2 {

    public static void main(String[] args) {

        Dog dog = new Dog();
        Car car = new Car();
        Object object = new Object(); //인스턴스도 생성 가능

        Object[] objects = {dog, car, object};

        size(objects);
        System.out.println(dog);
    }

    private static void size(Object[] objects) {
        System.out.println("전달된 객체의 수는 : " + objects.length);
    }
}
