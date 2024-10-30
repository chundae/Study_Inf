package Day8;

import java.util.Arrays;
import java.util.stream.IntStream;

public class test1 {


    public static int[] solution(int[] array, int[][] commands) {
        int[] result = new int[commands.length];
        int count = 0;
        for(int[] command : commands){
            int[] sliceArr = Arrays.copyOfRange(array, command[0] - 1, command[1]);
            int len = command[2];
            Arrays.sort(sliceArr);
            result[count] = sliceArr[len-1];

            count++;
        }

        return result;
    }

    public static void main(String[] args) {
        int[] a = {1,2,3,4,5,6,7};
        int[][] b = {
                {2, 5, 3},
                {4, 4, 1},
                {1, 7, 3}
        };

        int [] result = solution(a, b);
        System.out.println(Arrays.toString(result));
    }
}
