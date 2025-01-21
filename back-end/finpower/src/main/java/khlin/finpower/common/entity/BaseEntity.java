package khlin.finpower.common.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.Instant;

@Data
@MappedSuperclass
public abstract class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @Column(name = "created_by", nullable = false, length = 255)
    private String createdBy;

    @PrePersist
    public void onCreate() {
        this.createdAt = Instant.now();
        if (this.createdBy == null) {
            this.createdBy = "SYSTEM";
        }
    }
}
