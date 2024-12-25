package proxy;

public class Proxy implements ISubject{


    private RealSubject realSubject;

    Proxy(RealSubject realSubject){
        this.realSubject = realSubject;
    }

    public void action(){
        realSubject.action(); //위임
        System.out.println("프록시 객체 시작");
        for (int i = 0; i <= 10; i++) {
            if(i % 2 == 0){
                System.out.println(i);
            }
        }
        System.out.println("프록시 객체 종료ㄲ");
    }
}
