package app.sampleorm.domain4;

import jakarta.persistence.*;

@Entity
@IdClass(ChildId.class)
public class Child {

    @Id
    @ManyToOne
    @JoinColumn(name = "PARENT_ID")
    private Parent parent;

    @Id
    @Column(name = "CHILD_ID")
    private String childId;

    private String name;


}
