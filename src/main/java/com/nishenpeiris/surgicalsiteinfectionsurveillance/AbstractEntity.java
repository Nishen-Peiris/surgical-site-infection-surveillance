package com.nishenpeiris.surgicalsiteinfectionsurveillance;

import com.sun.javafx.beans.IDProperty;

/**
 * Base class to derive entity classes from
 *
 * @author Nishen Peiris
 */
public class AbstractEntity {
    private long id;

    /**
     * Returns the identifier of the entity
     *
     * @return the id
     */
    private long getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AbstractEntity that = (AbstractEntity) o;

        return id == that.id;
    }

    @Override
    public int hashCode() {
        return (int) (id ^ (id >>> 32));
    }
}
