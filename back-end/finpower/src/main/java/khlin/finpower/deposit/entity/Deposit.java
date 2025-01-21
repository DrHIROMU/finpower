package khlin.finpower.deposit.entity;

import jakarta.persistence.*;
import khlin.finpower.common.entity.UserAccessibleEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "deposit")
public class Deposit extends UserAccessibleEntity {
    @Column(name = "userId", nullable = false)
    private Long userId;

    @Column(name = "amount", nullable = false)
    private Double amount;

    @Column(name = "currency", nullable = false, length = 255)
    private String currency;
}
