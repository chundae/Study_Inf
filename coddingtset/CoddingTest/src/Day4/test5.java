package Day4;

public class test5 {

    public String solution(String my_string, String letter) {
        StringBuilder sb = new StringBuilder(my_string);

        for (int i = 0; i < sb.length(); i++) {
            if(my_string.charAt(i) != letter.charAt(0)) {
                sb.append(my_string.charAt(i));
            }
        }

        return sb.toString();
    }

    public String solution2(String my_string, String letter) {

        return my_string.replace(letter, "");
    }
}
