package Day4;

import java.util.Arrays;
import java.util.stream.IntStream;

public class test4_ref {
    public int[] solution(int[] numList) {
        return IntStream.of((int) Arrays.stream(numList)
                .filter(i -> i % 2 == 0).count(),
                (int) Arrays.stream(numList)
                        .filter(i -> i % 2 == 1)
                        .count())
                .toArray();
    }

    public int[] solution2(int[] num_list) {
        int[] answer = new int[2];

        for (int j : answer) {
            answer[j % 2]++;
        }
        return answer;
    }
}
