package Day4;

import java.util.Arrays;

public class test4 {

    public int[] solution(int[] num_list) {
        int[] result = new int[2];
        int even = 0;
        int odd = 0;
        for (int j : num_list) {

            if (j % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }
        result[0] = even;
        result[1] = odd;
        return result;
    }
}
