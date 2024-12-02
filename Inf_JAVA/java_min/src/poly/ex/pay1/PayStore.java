package poly.ex.pay1;

public abstract class PayStore {

    public static Pay findPaySystem(String option) {

        return switch (option) {
            case "kakao" -> new KakaoPay();
            case "naver" -> new NaverPay();
            default -> new DefaultPay();
        };
    }
}
