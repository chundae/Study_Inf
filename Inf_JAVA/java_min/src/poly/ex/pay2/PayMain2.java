package poly.ex.pay2;


import java.util.Scanner;

public class PayMain2 {


    public static void main(String[] args) {

        PayService payService = new PayService();
        Scanner sc = new Scanner(System.in);


        while (true) {
            System.out.print("결제 수단을 선택하세요 : ");
            String payOption = sc.nextLine().toLowerCase();
            if (payOption.equals("exit")) {
                System.out.println("결제 시스템을 종료합니다.");
                return;
            }


            System.out.print("결제 금액을 입력하세요 : ");
            int amount = sc.nextInt();
            sc.nextLine();

            payService.processPay(payOption, amount);

            System.out.println("payOption = " + payOption);

        }
    }
}