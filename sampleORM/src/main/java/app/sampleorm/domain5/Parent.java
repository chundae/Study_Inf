package app.sampleorm.domain5;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


//복합키 식별관계 매핑 for @EmbededId

@Entity
public class Parent {

    @Id
    @Column(name = "PARENT_ID")
    private String id;

    private String name;

}
