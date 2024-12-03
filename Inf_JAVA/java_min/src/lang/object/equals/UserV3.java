package lang.object.equals;

import java.util.Objects;

public class UserV3 {

    private String id;

    public UserV3(String id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserV3 userV3 = (UserV3) o;
        return Objects.equals(id, userV3.id);
    }

}
