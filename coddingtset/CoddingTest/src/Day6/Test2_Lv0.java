package Day6;

import java.util.stream.IntStream;

public class Test2_Lv0 {

    public int [] solution(int n){

        return IntStream.rangeClosed(1, n)
                .filter(i -> i % 2 != 0)
                .toArray();
    }
}
