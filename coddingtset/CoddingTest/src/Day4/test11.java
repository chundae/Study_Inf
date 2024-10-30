package Day4;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class test11 {

    public static void main(String[] args) {
        String[] participant = {"leo", "kiki", "eden"};
        String[] completion = {"eden", "kiki"};

        String result = solution(participant, completion);
        System.out.println("result = " + result);

    }

    public static String solution(String[] participant, String[] completion) {
        String result = "";
        Arrays.sort(participant);
        Arrays.sort(completion);

        List<String> partNoneMatch = Arrays.stream(participant)
                .filter(p -> Arrays.stream(completion)
                        .noneMatch(c -> c.equals(p)))
                .collect(Collectors.toList());

        return partNoneMatch.get(0);
    }

    public static String solution2(String[] participant, String[] completion) {
        //정렬
        Arrays.sort(participant);
        Arrays.sort(completion);

        //참가자 완주자 비교진행
        for (int i = 0; i < completion.length; i++) {
            if(!participant[i].equals(completion[i])) {
                //서로 다른 이름이 있으면 해당 참가자를 반환
                return participant[i];
            }
        }
        //마지막 참가자는 비교할 대상이 없으므로 완주 못한 사람
        return participant[participant.length - 1];
    }

    public static String solution3(String[] participant, String[] completion) {
        String answer = "";
        HashMap<String, Integer> map = new HashMap<>();
        for (String player : participant) map.put(player, map.getOrDefault(player, 0) + 1);
        for (String player : completion) map.put(player, map.get(player) - 1);

        for(String key : map.keySet()) {
            if (map.get(key) != 0) {
                answer = key;
            }
        }
        return answer;
    }
}
