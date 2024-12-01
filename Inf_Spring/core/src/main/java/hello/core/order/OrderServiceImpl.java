package hello.core.order;

import hello.core.discount.DiscountPolicy;
import hello.core.member.Member;
import hello.core.member.MemberRepository;

public class OrderServiceImpl implements OrderService {

    private final MemberRepository memberRepository;
    private final DiscountPolicy discountPolicy; //인터페이스에만 의존하도록 설정.

    //어떤 구현체가 들어올지 모른다. 구현체는 AppConfig에서 선택하여 변경한다.
    public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy discountPolicy) {
        this.memberRepository = memberRepository;
        this.discountPolicy = discountPolicy;
    }

    @Override
    public Order createOrder(Long memberId, String itemName, int itemPrice) {
        Member member = memberRepository.findById(memberId);

        //OrderService는 할인에 대한 부분은 모른다. 할인에 대한 책임을 DiscountPolicy 부여해 사용한다.
        //-> 단일책임원칙을 잘 준수한 코드이다. 할인이 변경되었을 때 order을 수정 할 필요없이 dicount만 수정하면된다.
        int discountPrice = discountPolicy.discount(member, itemPrice);

        return new Order(memberId, itemName, itemPrice, discountPrice);
    }
}