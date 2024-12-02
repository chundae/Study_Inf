package poly.ex.pay2;

public abstract class PayStore {

    public static Pay findPaySystem(String option) {

        return switch (option) {
            case "kakao" -> new KakaoPay();
            case "naver" -> new NaverPay();
            default -> new DefaultPay();
        };
    }
}
