package poly.ex.pay1;

public class PayService {

    public void processPay(String option, int amount) {

        //모든 결제 시스템은 Pay를 구현하고 있기떄문에 Pay로 받을 수 있음.
        // -> 다형성 LSP 리스코프 치환원칙 (하위 객체는 상위객체로 변환 가능해야한다.)
        Pay pay = PayStore.findPaySystem(option);
        boolean result = pay.pay(amount);

        if (result) {
            System.out.println("결제 성공");
        }else{
            System.out.println("결제 실패");
        }
    }
}
