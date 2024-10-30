package Day2;

public class test5 {

    public static void main(String[] args) {

    }

    public static String solution(int[] numLog) {
        StringBuilder sb = new StringBuilder();

        for(int i = 1; i < numLog.length; i++) {
            int z = numLog[i] - numLog[i-1];
            switch(z) {
                case 1: sb.append("w"); break;
                case -1: sb.append("s"); break;
                case 10: sb.append("d"); break;
                case -10: sb.append("a"); break;
                default: sb.append(z); break;
            }
        }
        return sb.toString();

    }
}

