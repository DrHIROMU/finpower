package khlin.finpower.user.service;

import khlin.finpower.user.dto.CreateUserRequest;
import khlin.finpower.user.dto.SearchUserRequest;
import khlin.finpower.user.entity.User;
import khlin.finpower.user.enums.AccountStatus;
import khlin.finpower.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findUsers() {
        return userRepository.findAll();
    }

    public List<User> searchUsers(SearchUserRequest searchUserRequest) {
        return userRepository.findUsersByConditions(
                searchUserRequest.getFirstName()
                , searchUserRequest.getLastName()
                , searchUserRequest.getEmail()
                , searchUserRequest.getAccountStatus());
    }

    @Transactional
    public User createUser(CreateUserRequest createUserRequest) {
        User user = new User();
        user.setFirstName(createUserRequest.getFirstName());
        user.setLastName(createUserRequest.getLastName());
        user.setEmail(createUserRequest.getEmail());
        user.setPassword(createUserRequest.getPassword());
        user.setAccountStatus(AccountStatus.ACTIVE);
        user.setCreatedBy(createUserRequest.getCreatedBy());
        user.setUpdatedBy(createUserRequest.getUpdatedBy());

        return userRepository.save(user);
    }

    @Transactional
    public User changeUserStatus(String id, AccountStatus accountStatus) {
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User does not exist."));
        user.setAccountStatus(accountStatus);
        user.setUpdatedBy("system");

        return userRepository.save(user);
    }
}
