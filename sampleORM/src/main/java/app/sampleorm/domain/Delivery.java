package app.sampleorm.domain;

import jakarta.persistence.*;

@Entity
public class Delivery {

    @Id
    @GeneratedValue
    @Column(name = "DELIVERYID")
    private Long delivery_id;

    @OneToOne(mappedBy = "delivery")
    private Order order;

    private String street;
    private String city;
    private String state;
    private String zipcode;
}
