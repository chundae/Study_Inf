package Day2;

import java.util.Arrays;

public class test6 {

    public static void main(String[] args) {

        int[] arr = {0, 1, 2, 3, 4};
        int[][] queries = {{0, 3}, {1, 2}, {1, 4}};

        for (int i = 0; i < queries.length; i++) {
            System.out.println(queries[i][0] + " " + queries[i][1]);
        }

    }

    public static int[] solution(int[] arr, int[][] queries) {
        int[] answer = Arrays.copyOf(arr, arr.length);

        for (int[] query : queries) {
            int first = query[0];
            int second = query[1];

            // 두 값을 교환
            int temp = answer[first]; //temp = first
            answer[first] = answer[second]; //first = second
            answer[second] = temp; //second = first
        }

        return answer;
    }
}
