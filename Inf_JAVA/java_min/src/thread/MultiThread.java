package thread;

public class MultiThread extends Thread {

    int seq;

    public MultiThread(int seq) {
        this.seq = seq;
    }

    @Override
    public void run(){
        System.out.println(seq + "번째 스레드 시작");

        try {
            Thread.sleep(1000);
        }catch (InterruptedException e){
            throw new RuntimeException(e);
        }

        System.out.println(seq + "번째 스레드 종료");
    }
}
