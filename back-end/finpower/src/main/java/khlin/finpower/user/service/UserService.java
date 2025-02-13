package khlin.finpower.user.service;

import khlin.finpower.user.dto.UserDto;
import khlin.finpower.user.entity.User;
import khlin.finpower.user.enums.AccountStatus;
import khlin.finpower.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findUsers(){
        return userRepository.findAll();
    }

    @Transactional
    public User createUser(UserDto userDto) {
        User user = new User();
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        user.setAccountStatus(AccountStatus.ACTIVE);
        user.setCreatedBy(userDto.getCreatedBy());
        user.setUpdatedBy(userDto.getUpdatedBy());

        return userRepository.save(user);
    }

    @Transactional
    public User disableUser(String id){
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User does not exist."));
        user.setAccountStatus(AccountStatus.INACTIVE);
        user.setUpdatedBy("system");

        return userRepository.save(user);
    }

    @Transactional
    public User activateUser(String id){
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User does not exist."));
        user.setAccountStatus(AccountStatus.ACTIVE);
        user.setUpdatedBy("system");

        return userRepository.save(user);
    }
}
