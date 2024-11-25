package app.sampleorm.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Member {

    @Id @GeneratedValue
    @Column(name = "MEMBERID")
    private Long member_id;

    private String name;
    private String city;
    private String street;
    private String zipcode;
}
