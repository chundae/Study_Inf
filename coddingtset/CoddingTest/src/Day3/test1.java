package Day3;

import java.util.Arrays;

public class test1 {

    public static void main(String[] args) {

        int[] arr = {0, 1, 2, 4, 3};
        int[][] queries = {{0, 4, 2}, {0, 3, 2}, {0, 2, 2}};

    }

    public static int[] solution(int[] arr, int[][] queries) {
        int [] result = new int[queries.length];

        int count  = 0;
        for (int[] query : queries) {
            //현재 구간에서 가장 작은값을저장할 변수 초기화
            int temp = -1;

            //구간을 설정하여 탐색(query[1] + 1 로 변위를 지정하여 query[1]을 포함)
            for(int i= query[0]; i<= query[1]; i++) {
                if(arr[i]> query[2]) {
                    //temp가 -1이거나 현재 값이 temp보다 작으면 값을 갱신
                    if (temp == -1 || arr[i] < temp) {
                        temp = arr[i];
                    }
                }
            }

            result[count++] =temp;
        }

        return result;
    }
}
