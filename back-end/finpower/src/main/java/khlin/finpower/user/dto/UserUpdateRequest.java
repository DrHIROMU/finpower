package khlin.finpower.user.dto;

import khlin.finpower.user.enums.AccountStatus;
import lombok.Data;

@Data
public class UserUpdateRequest {
    private AccountStatus accountStatus;
}
