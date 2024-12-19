package hello.core.singleton;

import hello.core.AppConfig;
import hello.core.member.MemberService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import static org.assertj.core.api.Assertions.*;

public class SingletonTest {


    @Test
    @DisplayName("스프링 없는 순수한 DI 컨테이너")
    void pureCOntainer() {
        AppConfig appConfig = new AppConfig();

        //1. 조회 : 호출 할때 마다 객체를 생성
        MemberService memberService = appConfig.memberService();

        //2. 조회 : 호출할 떄마다 객체를 생성
        MemberService memberService2 = appConfig.memberService();

        //참조갑이 다른것을 확인
        System.out.println("memberService = " + memberService);
        System.out.println("memberService2 = " + memberService2);

        // memberserive1 !== memberserivce2
        assertThat(memberService).isNotSameAs(memberService2);
    }


    @Test
    @DisplayName("싱글톤 패턴을 적용한 객체 사용")
    void singletonServiceTest() {
        SingletonService instance1 = SingletonService.getInstance();
        SingletonService instance2 = SingletonService.getInstance();

        //참조값 확인
        System.out.println("instance1 = " + instance1);
        System.out.println("instance2 = " + instance2);

        //Test
        assertThat(instance1).isSameAs(instance2);

        /*
        same : == 동일성 비교
        equals : 동등성 비교
         */
    }

    @Test
    @DisplayName("스프링 컨테이너와 싱글톤")
    void springContainer(){
        ApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);

        //1. 조회 : 호출 할때 마다 객체를 생성
        MemberService memberService = ac.getBean("memberService",MemberService.class);

        //2. 조회 : 호출할 떄마다 객체를 생성
        MemberService memberService2 = ac.getBean("memberService",MemberService.class);

        //참조갑이 다른것을 확인
        System.out.println("memberService = " + memberService);
        System.out.println("memberService2 = " + memberService2);

        // memberserive1 !== memberserivce2
        assertThat(memberService).isSameAs(memberService2);
    }
}
