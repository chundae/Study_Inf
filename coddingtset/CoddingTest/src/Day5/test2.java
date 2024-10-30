package Day5;

import javax.print.DocFlavor;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class test2 {

    public static void main(String[] args) {
        String [] [] clothes = {{"yellow_hat", "headgear"}, {"blue_sunglasses", "eyewear"}, {"green_turban", "headgear"}};

        int result = solution(clothes);

    }

    public static int solution(String[][] clothes) {

        //옷 종류별로 HashMap형태로 분류
        HashMap<String, Integer> clothesMap = new HashMap<>();

        for (String[] cloth : clothes) {
            String category = cloth[1]; // [0]은 옷이름 [1] 옷 종류

            //getOrDefault 를 사용해서 기본값을 0으로 설정 후 있으면 1씩 증가
            clothesMap.put(category, clothesMap.getOrDefault(category, 0) + 1);
        }

        //경우의 수 계산
        int count = 1;

        for(int clothOfCount : clothesMap.values()) {
            //각 카테고리마다 (해당 카테고리의 옷 개수 + 1) 곱 (입지읺는경우)
            count *= (clothOfCount + 1);
        }

        //모든 카테고리에서 옷을 입지않는 경우 1가지를 빼기
        count -= 1;
        return count;
    }
}
