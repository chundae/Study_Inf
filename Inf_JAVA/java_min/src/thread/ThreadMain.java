package thread;

public class ThreadMain {

    public static void main(String[] args) {

        for (int i = 1; i <= 10; i++) {
            MultiThread thread = new MultiThread(i);

            thread.start();
            boolean alive = thread.isAlive();
            System.out.println("alive = " + alive);
        }
        System.out.println("메인 스레드 종료");
    }
}
