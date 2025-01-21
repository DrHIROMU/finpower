package khlin.finpower.common.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.UuidGenerator;

import java.time.Instant;

@Data
@EqualsAndHashCode(callSuper=true)
@MappedSuperclass
public abstract class UserAccessibleEntity extends BaseEntity {
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @Column(name = "updated_by", nullable = false, length = 255)
    private String updatedBy;

    @PrePersist
    public void onCreate() {
        super.onCreate();
        this.updatedAt = super.getCreatedAt();
        if (this.updatedBy == null) {
            this.updatedBy = "SYSTEM";
        }
    }

    @PreUpdate
    public void onUpdate() {
        this.updatedAt = Instant.now();
        if (this.updatedBy == null) {
            this.updatedBy = "SYSTEM";
        }
    }
}
