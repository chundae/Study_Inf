package hello.core.singleton;

public class SingletonService {

    //상수형 인스턴스
    private static final SingletonService instance = new SingletonService();


    public static SingletonService getInstance() {
        return instance;
    }


    private SingletonService() {
    }

    public void login(){
        System.out.println("singleton instance 호출");
    }
}
