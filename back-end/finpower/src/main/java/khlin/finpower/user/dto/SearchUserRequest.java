package khlin.finpower.user.dto;

import khlin.finpower.user.enums.AccountStatus;
import lombok.Data;

@Data
public class SearchUserRequest {
    private String firstName;
    private String lastName;
    private String email;
    private AccountStatus accountStatus;
}
