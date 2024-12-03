package lang.object.poly;

public class ObjectPolyMain1 {

    public static void main(String[] args) {

        Object dog = new Dog();
        Object car = new Car();

        action(dog);
        action(car);

    }

    public static void action(Object obj){
//        obj.sound(); //object에는 sound()메서드는 없음. 컴파일 오류
//        obj.move(); //object에는 move()메서드는 없음.


        if(obj instanceof Dog dog){
            dog.sound();
        }else if (obj instanceof Car car){
            car.move();
        }

    }
}
