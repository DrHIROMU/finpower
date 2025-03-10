package khlin.finpower.common.entity;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.time.Instant;

@Data
@EqualsAndHashCode(callSuper=true)
@MappedSuperclass
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public abstract class UserAccessibleEntity extends BaseEntity {
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @Column(name = "updated_by", nullable = false, length = 200)
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
