package Day4;

import java.util.stream.IntStream;

public class test6 {

    public int[] solution(int[] A) {
        int [] result = new int[A.length];

        for(int i= 0; i<A.length; i++){
            result[i] = A[i] << 1;
        }
        return result;
    }
}
