package app.sampleorm.domain6;


import jakarta.persistence.*;

@Entity
public class BoardDetail {

    @Id
    private Long boardId;

    @MapsId //BoardDetail.boardId 매핑
    @OneToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    private String context;
}