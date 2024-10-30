package Day4;

import java.util.Comparator;
import java.util.stream.Stream;

public class test2 {

    public static void main(String[] args) {

    }

    public String solution(String my_string) {
//        StringBuilder builder = new StringBuilder(my_string);
//        return builder.reverse().toString();
        //리펙토링
        return new StringBuilder(my_string).reverse().toString();
    }




}

