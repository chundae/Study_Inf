package app.sampleorm.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Item {

    @Id
    @GeneratedValue
    @Column(name = "ITEMID")
    private Integer item_id;

    private String name;
    private Integer price;
    private Integer quantity;
}
