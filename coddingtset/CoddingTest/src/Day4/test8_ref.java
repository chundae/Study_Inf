package Day4;

import java.util.HashMap;
import java.util.Map;

public class test8_ref {

    public int solution(int[] array) {

        int maxCount = 0;
        int answer = 0;

        Map<Integer, Integer> map = new HashMap<>();

        /*
        getOfDefault : 찾는 키가 존재한다면 찾는 키의 값을 반환하고 없다면 기본 값을 반환하는 메서드
        getOrDefault(Object key, V DefaultValue)
        매개변수 : 해당 메서드는 두개의 매개변수를 허용
        key : 값을 가져와야하는 요소의 키
        defaultValue : 지정된 키로 매핑된 값이 없는 경우 반환되어야 하는 기본값
        반환값 : 찾는 key가 존재하면 해당 key에 매핑되어 있는 값을 반환하고, 그렇지 않으면 디폴트 값을 반환
         */

        for (int num : array) {
            int count = map.getOrDefault(num, 0) + 1;

            if (count > maxCount) {
                maxCount = count;
                answer = num;
            } else if (count == maxCount) {
                answer = -1;
            }
            map.put(num, maxCount);
        }

        return answer;
    }
}
