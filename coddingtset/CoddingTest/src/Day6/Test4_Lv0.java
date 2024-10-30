package Day6;

public class Test4_Lv0 {


    public static void main(String[] args) {
        int p =10;


        int result = solution(p);
        System.out.println("result = " + result);
    }
    public static int solution(int n) {

        for (int i = 1; i <= 100; i++) {
            if ((i * 6) % n == 0) {
                return i;
            }
        }
        return 0;
    }
}
