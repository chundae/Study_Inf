package Day4;

import java.util.stream.IntStream;

public class test1 {

    public static void main(String[] args) {

    }

    public static int solution(int n, int t) {
        return IntStream.iterate(n, o -> o * 2)
                .limit(t)
                .sum() + n;
    }
}
