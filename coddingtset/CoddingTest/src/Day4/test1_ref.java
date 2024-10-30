package Day4;

public class test1_ref {

    public int solution(int n, int t) {
        int answer = 0;

        answer = n << t;
        //비트 연산자.. -> 비트연산은 한칸씩밀면 2를 곱한거와 같다. 따라서 t까지 밀어주면 정답.

        return answer;
    }
}
