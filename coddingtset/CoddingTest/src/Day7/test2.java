package Day7;

public class test2 {

    public static void main(String[] args) {

        String my_string = "hello";
        int n = 3;
        char [] charstr = my_string.toCharArray();
        StringBuilder result = new StringBuilder();
        for(int i = 0; i < my_string.length(); i++){
            for(int j = 0; j < n; j++){
                result.append(charstr[i]);
            }
        }

        System.out.println(result.toString());
    }
}
