package Day2;

public class test4_ref {
    public static void main(String[] args) {


    }

    public static int solution(int n, String control) {
        int result = n;
        for(char ch : control.toCharArray()) {
            switch(ch) {
                case 'w' : result += 1; break;
                case 's' : result -= 1; break;
                case 'd' : result += 10; break;
                case 'a' : result -= 10; break;
                default: break;
            }
        }

        return result;
    }
}
