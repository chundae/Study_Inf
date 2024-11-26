package app.sampleorm.domain4;

import java.io.Serializable;
import java.util.Objects;

public class GrandChildId implements Serializable {

    private ChildId Child;

    private String id;

    public GrandChildId() {}

    public GrandChildId(ChildId Child, String id) {
        this.Child = Child;
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GrandChildId that = (GrandChildId) o;
        return Objects.equals(Child, that.Child) && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Child, id);
    }
}
