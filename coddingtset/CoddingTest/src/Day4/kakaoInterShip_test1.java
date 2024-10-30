package Day4;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class kakaoInterShip_test1 {
    public static void main(String[] args) {

        String [] friends = {"joy", "brad", "alessandro", "conan", "david"};
        String [] gifts = {"alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"};



        int result = solution(friends, gifts);
        System.out.println(result);

    }
    public static int solution(String[] friends, String[] gifts) {
        // 준 선물, 받은 선물 기록을 위한 Map
        Map<String, Integer> givenGifts = new HashMap<>();
        Map<String, Integer> receivedGifts = new HashMap<>();

        // 친구 리스트로 준 선물과 받은 선물 초기화
        for (String friend : friends) {
            givenGifts.put(friend, 0);
            receivedGifts.put(friend, 0);
        }

        // 선물 기록 분석 (준 사람 -> 받은 사람)
        for (String gift : gifts) {
            String[] splitGift = gift.split(" ");
            String giver = splitGift[0];
            String receiver = splitGift[1];

            // 준 선물 개수 증가
            givenGifts.put(giver, givenGifts.get(giver) + 1);
            // 받은 선물 개수 증가
            receivedGifts.put(receiver, receivedGifts.get(receiver) + 1);
        }
        System.out.println("givenGifts = " + givenGifts);
        System.out.println("receivedGifts = " + receivedGifts);

        // 다음 달에 받게 될 선물 수를 저장하는 배열
        int[] nextMonthGifts = new int[friends.length];

        // 두 사람 간의 선물 주고받은 기록을 확인
        for (int i = 0; i < friends.length; i++) {
            for (int j = i + 1; j < friends.length; j++) {
                String friend1 = friends[i];
                String friend2 = friends[j];

                int giftsFrom1To2 = getGiftCount(gifts, friend1, friend2);
                int giftsFrom2To1 = getGiftCount(gifts, friend2, friend1);

                if (giftsFrom1To2 > giftsFrom2To1) {
                    nextMonthGifts[j]++;  // friend1이 더 많이 줬으므로 friend1이 다음 달에 받을 선물이 하나 증가
                } else if (giftsFrom1To2 < giftsFrom2To1) {
                    nextMonthGifts[i]++;  // friend2가 더 많이 줬으므로 friend2가 다음 달에 받을 선물이 하나 증가
                } else {
                    // 준 선물이 같다면 선물 지수를 비교
                    int friend1Score = givenGifts.get(friend1) - receivedGifts.get(friend1);
                    int friend2Score = givenGifts.get(friend2) - receivedGifts.get(friend2);

                    if (friend1Score > friend2Score) {
                        nextMonthGifts[j]++;
                    } else if (friend1Score < friend2Score) {
                        nextMonthGifts[i]++;
                    }
                }
            }
        }
        for (int nextMonthGift : nextMonthGifts) {
            System.out.println("nextMonthGift = " + nextMonthGift);
        }

        // 가장 많이 받는 선물의 개수 찾기
        int maxGifts = 0;
        for (int giftCount : nextMonthGifts) {
            maxGifts = Math.max(maxGifts, giftCount);
        }

        return maxGifts;
    }

    // 두 사람 간 선물 주고받은 횟수를 계산하는 함수
    private static int getGiftCount(String[] gifts, String giver, String receiver) {
        int count = 0;
        for (String gift : gifts) {
            String[] splitGift = gift.split(" ");
            if (splitGift[0].equals(giver) && splitGift[1].equals(receiver)) {
                count++;
            }
        }
        return count;
    }
}
