package Day7;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

public class test1 {

    public static void main(String[] args) {

        int n = 3;

        for (int i = 1; i <= n; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
