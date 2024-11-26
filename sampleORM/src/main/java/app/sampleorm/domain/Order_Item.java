package app.sampleorm.domain;

import jakarta.persistence.*;

@Entity
public class Order_Item {

    @Id
    @GeneratedValue
    @Column(name = "ORDERITEMID")
    private Long order_item_id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    private Integer quantity;

    private Integer count;
}
