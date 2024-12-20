package app.sampleorm.domain4;

import jakarta.persistence.*;

@Entity
@IdClass(GrandChildId.class)
public class GrandChild {

    @Id
    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "PARENT_ID"),
            @JoinColumn(name = "CHILD_ID")
    })
    private Child child;


    @Id
    @Column(name = "GRANDCHILD_ID")
    private String id;

    private String name;

}
