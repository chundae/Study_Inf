package app.sampleorm.domain4;

import jakarta.persistence.*;


//복합키 식별관계 매핑 for @IdClass

@Entity
public class Parent {

    @Id
    @Column(name = "PARENT_ID")
    private String id;

    private String name;

}
