package lang.object.tostring;

public class ObjectPrinter {

    public static void printer(Object obj) {
        String string = "출력할 객체 = " + obj.toString();
        System.out.println(string);
    }
}
