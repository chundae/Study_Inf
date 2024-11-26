package app.sampleorm.domain;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Category {

    @Id
    @GeneratedValue
    @Column(name = "CATEGORYID")
    private Integer category_id;

    private String category_Name;

    @ManyToMany
    @JoinTable(name = "category_Item",
            joinColumns = @JoinColumn(name = "CATEGORYID"),
            inverseJoinColumns = @JoinColumn(name = "ITEMID"))
    private List<Item> items = new ArrayList<Item>();


}
