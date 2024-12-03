package poly.ex.pay1;

public abstract class PayStore {

    public static Pay findPaySystem(String option) {

        //결제수단 검증 메서드 -> 결제수단 추가시 해당 영역에 추가
        return switch (option) {
            case "kakao" -> new KakaoPay();
            case "naver" -> new NaverPay();
            default -> new DefaultPay();
        };
    }
}
