package hello.core.member;

public class MemberServiceImpl implements MemberService {

    private MemberRepository memberRepository;

    //생성자 주입 DIP 원칙을 지키기위함. MemberServiceImpl은 추상화를 바라보게된다.
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public void join(Member member) {
        memberRepository.save(member);
    }

    @Override
    public Member findMember(Long memberId) {
        return memberRepository.findById(memberId);
    }

    //테스트 용도
    public MemberRepository getMemberRepository() {
        return memberRepository;
    }


}
