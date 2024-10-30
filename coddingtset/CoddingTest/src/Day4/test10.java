package Day4;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class test10 {

    public static void main(String[] args) {
        int [] nums = {3, 1, 2, 3};

        int result = solution(nums);
        System.out.println(result);
    }

    public static int solution(int[] nums) {


        int len = nums.length;
        int total = len / 2;
        System.out.println("total = " + total);
        System.out.println("len = " + len);

        long answer = Arrays.stream(nums)
                .distinct()
                .limit(total)
                .count();

        System.out.println("answer = " + answer);
        return (int)answer;
    }

    public static int solution2(int[] nums) {
        Set<Integer> distinctNums = new HashSet<>();
        for (int num : nums) {
            distinctNums.add(num);
        }

        int maxCarry = nums.length / 2;

        return Math.min(distinctNums.size(), maxCarry);
    }
}

/*
n/2개의 포켓몬을 소지가능하다.
-> 종류의 카운트는 총 2 종류로 제한한다.
-> 예를들어 (3,1,2,3)이 있다면, 2종류가 가능하며
-> (3,3,3,1,1,1)이면 n/2하면 3마리를 소지할수 있지만 종류는 2로 카운트된다.
= 가장 많은 종류 포켓몬을 선택하는 방법
 */
