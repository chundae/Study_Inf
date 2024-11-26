package app.sampleorm.domain5;

import jakarta.persistence.*;

@Entity
public class Child {
    @EmbeddedId
    private ChildId id;

    @MapsId("parentId") //childId.parentId매핑
    @ManyToOne
    @JoinColumn(name = "PARENT_ID")
    public Parent parent;

    private String name;
}
