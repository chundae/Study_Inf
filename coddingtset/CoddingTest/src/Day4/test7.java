package Day4;

import java.util.Arrays;

public class test7 {

    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int num = numer1*denom2 + numer2*denom1;
        int den = denom1*denom2;

        int max = 1;

        for (int i = 1; i <= num && i <= den; i++) {
            if(den % i == 0 && num % i == 0) {
                max = i;
            }
        }

        int re_num  = num / max;
        int re_den = den / max;

        return new int[]{re_num, re_den};
    }
}
