package hello.core.member;


import hello.core.Member.Grade;
import hello.core.Member.Member;
import hello.core.Member.MemberService;
import hello.core.Member.MemberServiceImpl;
import hello.core.Order.Order;
import hello.core.Order.OrderService;
import hello.core.Order.OrderServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class OrderServiceTest {


    MemberService memberService = new MemberServiceImpl();
    OrderService orderService = new OrderServiceImpl();

    @Test
    void order(){

        //given
        Long memberId = 1L;
        Member member = new Member(memberId, "A", Grade.VIP);
        memberService.join(member);

        //when
        Order order = orderService.createOrder(memberId, "p", 10000);
        int price = order.calculatePrice(order.getItemPrice(), order.getDiscountPrice());

        //then
        Assertions.assertThat(order.getDiscountPrice()).isEqualTo(1000);
    }
}
