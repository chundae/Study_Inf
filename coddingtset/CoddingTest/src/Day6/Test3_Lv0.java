package Day6;

public class Test3_Lv0 {

    public static void main(String[] args) {
        int n = 19;

        int a = n + 6;
        System.out.println( n % 7);


//        int result = solution2(n);
//        System.out.println(result);
    }
    /*
    n = 1인경우 1을 그대로 반환..
    n = 7의 배수의 경우 %계산시 0으로 반환.
     */

    public static int solution(int n) {

        if (n % 7 == 0) {
            return n / 7;
        }else {
            return n / 7 + 1;
        }

    }

    public static int solution2(int n) {
        return (n + 6) / 7;
    }
}
