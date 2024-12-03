package lang.object.tostring;

import java.util.Arrays;

import static lang.object.tostring.ObjectPrinter.printer;

public class ToStringMain2 {

    public static void main(String[] args) {

        Car car = new Car("red", "model Y");
        Dog dog = new Dog("dog1", 1);

        System.out.println("car = " + car);
        System.out.println("dog = " + dog);

        printer(car);
        printer(dog);
    }
}
