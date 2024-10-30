package Day2;

import java.util.stream.IntStream;

public class test4 {

    public static void main(String[] args) {
        int n = 0;

        String control = "wsasd"; // 1 , 0, -10, -11, -1;
        int result = solution(n, control);
        System.out.println(result);
    }


    public static int solution(int n, String control) {
        int answer = n; //n으로 answer을 초기화 진행

        char [] char_control = control.toCharArray();
        int count = 0;

        //count가 control의 길이보다 작을때까지 반복을 진행
        while (count < char_control.length) {
            answer += switch (char_control[count]) {
                case 'w' -> 1;  // w = +1
                case 's' -> -1; // s = -1
                case 'a' -> -10; // a = -10
                case 'd' -> 10; // d = +10
                default -> answer; //기본값은 변화하지 않음

            };
            count++; //루프 진행시 값 증가
        }
        return answer; //반환
    }

}
