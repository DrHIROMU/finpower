package khlin.finpower.user.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import khlin.finpower.common.entity.UserAccessibleEntity;
import khlin.finpower.user.enums.AccountStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "user")
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class User extends UserAccessibleEntity {
    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "email", nullable = false, unique = true, length = 200)
    private String email;

    @Column(name = "password", nullable = false, length = 150)
    private String password;

    @Column(name = "account_status", nullable = false, length = 2)
    private AccountStatus accountStatus;
}
