package Day4;

public class test3 {

    /*
    양꼬치 1인분 = 12,000
    음료수  = 2,000

    n = 양꼬치
    k = 음료수

    n과 k를 입력받았을떄 지불금액
    (조건 양꼬치 10인분은 음료 하나 서비스)
     */

    public int solution(int e, int d) {
        int service = e / 10;
        int epost = 12_000;
        int kpost = 2_000;

        int total = (e * epost) + (d * kpost) - (service * kpost);
        return total;
    }
}
