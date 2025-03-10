package khlin.finpower.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import khlin.finpower.user.enums.AccountStatus;
import lombok.Data;

@Data
public class CreateUserRequest {
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotBlank(message = "Last name is required")
    private String lastName;

    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Password is required")
    private String password;

    @NotNull(message = "Account status is required")
    private AccountStatus accountStatus;

    @NotBlank(message = "Created by is required")
    private String createdBy;

    @NotBlank(message = "Updated by is required")
    private String updatedBy;
}
