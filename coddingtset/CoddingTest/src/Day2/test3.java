package Day2;

import java.util.Arrays;

public class test3 {

    public static void main(String[] args) {
        int [] numList_1 = {2, 1, 6};
        int len = numList_1.length;
        int last = numList_1[len-1];
        int second = numList_1[len-2];
        System.out.println("last = " + last);
        System.out.println("len = " + len);
        System.out.println("second = " + second);
        int [] result = solution(numList_1);

        for (int i : result) {
            System.out.println("i = " + i);
        }

    }


    public static int[] solution(int[] num_list) {
        int [] answer =  Arrays.copyOf(num_list, num_list.length + 1);

        int len = num_list.length;
        int lastNum = num_list[len - 1];
        int secondNum = num_list[len - 2];
        int result = (lastNum > secondNum) ? lastNum - secondNum : lastNum * 2;

        answer[num_list.length] = result;

        return answer;
    }
}
