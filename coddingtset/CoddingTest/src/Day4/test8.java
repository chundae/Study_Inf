package Day4;

import java.util.HashMap;
import java.util.Map;


public class test8 {

    public int solution(int[] array) {
// 빈도수를 저장할 Map 생성
        Map<Integer, Integer> map = new HashMap<>();

        // 배열을 순회하며 각 숫자의 빈도수를 카운트
        for (int num : array) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // 최빈값과 그 빈도를 저장할 변수
        int max = 0;
        int mode = -1;
        boolean multi = false; // 최빈값이 여러 개인지 확인하기 위한 변수

        // Map을 순회하면서 최빈값을 찾음
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int number = entry.getKey();
            int frequency = entry.getValue();

            if (frequency > max) {
                max = frequency;
                mode = number;
                multi = false; // 새로운 최빈값이 나왔을 때는 최빈값이 여러 개가 아님
            } else if (frequency == max) {
                multi = true; // 최빈값이 여러 개일 경우
            }
        }

        // 최빈값이 여러 개일 경우 -1 반환
        if (multi) {
            return -1;
        }

        return mode; // 최빈값 반환
    }
}
