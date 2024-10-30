package Day3;

import java.util.ArrayList;

public class test3 {

    public static void main(String[] args) {

        int a = 5;
        int b = 55;

        int[] result = solution(a, b);
        for (int i : result) {
            System.out.print("i = " + i);
        }

    }

    public static int[] solution(int l, int r) {
        ArrayList<Integer> list = new ArrayList<>();

        for(int i = l; i <= r; i++) {
            if (isCheck(i)) {
                list.add(i);
            }
        }
        if (list.isEmpty()) {
            return new int[] {-1};
        }

        return list.stream().mapToInt(i -> i).toArray();
    }

    public static boolean isCheck(int i) {
        String str = Integer.toString(i);
        for (char c : str.toCharArray()) {
            if(c != '0' && c != '5') {
                return false;
            }
        }
        return true;
    }
}
