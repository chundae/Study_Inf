package thread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SingletonThread {

    public static void main(String[] args) {

        Singleton [] singleton = new Singleton[10];

        ExecutorService service = Executors.newCachedThreadPool();

        for (int i = 0; i < 10; i++) {
            final int num = 1;
            service.submit(() ->{
                singleton[num] = Singleton.getInstance();
            });
        }

        service.shutdown();

        for(Singleton s : singleton){
            System.out.println(s);
        }
    }
}
