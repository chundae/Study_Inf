package Day6;

public class Test5_Lv0 {


    public static void main(String[] args) {
        int slice = 10;
        int people = 12;

        int result = solution(slice, people);
        System.out.println(result);
    }

    public static int solution(int slice, int n) {

        if (n % slice == 0) {
            //나머지가 없이 떨어지면 n / s를 진행
            return n / slice;
        }else{
            //나머지가 있다면 한판을 더 추가해 최소 판수를 맞춘다.
            return (n / slice) + 1;
        }

    }

    public static int solution2(int slice, int people) {
        return (people + slice - 1) / slice;
    }
}
/*
(people + slice -1)은 하나의 식으로써 나머지를 자연스럽게 처리하기 위해 사용한다.
정수 나누기 특성상 10 / 7 = 1(소수 아래버림)으로 처리가 되기때문에 최소 한조각씩 먹어야하는 조건이 맞지 않는다.
위 공식을 사용하면 (10 + 7 -1) / 7 = (16) / 7 = 2 처럼 자연스럽게 올림처리가 되어 최소 피자의 갯수가
출력되는 것을 확인 할 수 있다.

사용 이유는 n / s = x 일때 x는 소수 아래가 버림처리 되기 때문에
(n + s - 1) / s = x 로 진행하여 연산을 진행할때 자연스럽게 올림처리를 하여
최소 판수를 구하도록 하는 것이다.

 */