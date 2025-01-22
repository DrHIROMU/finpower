package khlin.finpower.auth.controller;

import jakarta.validation.Valid;
import khlin.finpower.auth.dto.LoginRequest;
import khlin.finpower.auth.dto.LoginResponse;
import khlin.finpower.auth.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("login")
    public ResponseEntity<LoginResponse> createUser(@Valid @RequestBody LoginRequest loginRequest) {
        String token = authService.login(loginRequest);

        if(token == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(new LoginResponse(token));
    }
}
