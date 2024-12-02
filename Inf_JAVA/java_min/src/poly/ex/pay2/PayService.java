package poly.ex.pay2;

public class PayService {

    public void processPay(String option, int amount) {

        Pay pay = PayStore.findPaySystem(option);
        boolean result = pay.pay(amount);

        if (result) {
            System.out.println("결제 성공");
        }else{
            System.out.println("결제 실패");
        }
    }
}
