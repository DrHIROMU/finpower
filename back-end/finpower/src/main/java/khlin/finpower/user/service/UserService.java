package khlin.finpower.user.service;

import khlin.finpower.user.dto.UserDto;
import khlin.finpower.user.entity.User;
import khlin.finpower.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(UserDto userDto) {
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setCreatedBy(userDto.getCreatedBy());
        user.setUpdatedBy(userDto.getUpdatedBy());

        Instant now = Instant.now();
        user.setCreatedAt(now);
        user.setUpdatedAt(now);

        return userRepository.save(user);
    }
}
