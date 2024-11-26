package app.sampleorm.domain5;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ChildId implements Serializable {

    private String parentId; //@MapsId("parentId")로 매핑

    @Column(name = "CHILD_ID")
    private String id;

    public ChildId() {
    }

    public ChildId(String id, String parentId) {
        this.id = id;
        this.parentId = parentId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChildId childId = (ChildId) o;
        return Objects.equals(parentId, childId.parentId) && Objects.equals(id, childId.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(parentId, id);
    }
}
