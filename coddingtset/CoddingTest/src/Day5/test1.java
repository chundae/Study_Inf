package Day5;

public class test1 {

    public static void main(String[] args) {

        String[] phone_book = {"119", "97674223", "1195524421"};
        String[] phone_book2 = {"123","456","789"};
        String[] phone_book3 = {"12","123","1235","567","88"};
        boolean result = solution(phone_book2);
        System.out.println("result = " + result);
        boolean result2 = solution(phone_book3);
        System.out.println("result2 = " + result2);
    }

    public static boolean solution(String[] phone_book) {
        char [] headNum = phone_book[0].toCharArray();
        int len = phone_book[0].length();
        int count = 0;

        for (int i = 0; i < phone_book.length - 1; i++) {
            char [] num = phone_book[i+1].toCharArray();

            for(int j = 0; j < len; j++) {
                if (headNum[j] == num[j]) {
                    count++;
                }
            }
        }
        System.out.println("count = " + count);


        return count == 0;
    }
}
