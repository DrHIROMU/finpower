package khlin.finpower.auth.service;

import khlin.finpower.auth.dto.LoginRequest;
import khlin.finpower.auth.util.JWTUtils;
import khlin.finpower.user.entity.User;
import khlin.finpower.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;

    public String login(LoginRequest loginRequest){
        Optional<User> loginUser = userRepository.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());

        if(loginUser.isEmpty()){
            return null;
        }

        return JWTUtils.generateToken(loginRequest.getEmail());
    }
}
