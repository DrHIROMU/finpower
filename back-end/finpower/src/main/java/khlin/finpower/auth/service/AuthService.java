package khlin.finpower.auth.service;

import khlin.finpower.auth.dto.LoginRequest;
import khlin.finpower.auth.util.JWTUtils;
import khlin.finpower.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;

    public String login(LoginRequest loginRequest){
        return JWTUtils.generateToken(loginRequest.getEmail());
    }
}
