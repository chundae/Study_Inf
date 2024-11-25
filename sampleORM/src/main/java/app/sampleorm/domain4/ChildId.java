package app.sampleorm.domain4;

import java.io.Serializable;
import java.util.Objects;

public class ChildId implements Serializable {

    private String parent;
    private String child;

    public ChildId () {}
    public ChildId(String parent, String child) {
        this.parent = parent;
        this.child = child;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChildId childId = (ChildId) o;
        return Objects.equals(parent, childId.parent) && Objects.equals(child, childId.child);
    }

    @Override
    public int hashCode() {
        return Objects.hash(parent, child);
    }
}
