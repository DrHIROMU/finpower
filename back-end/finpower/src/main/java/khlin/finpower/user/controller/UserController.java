package khlin.finpower.user.controller;

import jakarta.validation.Valid;
import khlin.finpower.user.dto.CreateUserRequest;
import khlin.finpower.user.dto.SearchUserRequest;
import khlin.finpower.user.dto.UpdateUserRequest;
import khlin.finpower.user.entity.User;
import khlin.finpower.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> findUsers() {
        return new ResponseEntity<>(userService.findUsers(), HttpStatus.OK);
    }

    @PostMapping("/search")
    public ResponseEntity<List<User>> searchUsers(@RequestBody SearchUserRequest searchUserRequest) {
        return new ResponseEntity<>(userService.searchUsers(searchUserRequest), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserRequest createUserRequest) {
        User user = userService.createUser(createUserRequest);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PatchMapping("{id}/status")
    public ResponseEntity<User> updateUserStatus(@PathVariable String id, @RequestBody UpdateUserRequest updateUserRequest) {
        User updatedUser = userService.changeUserStatus(id, updateUserRequest.getAccountStatus());
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
}
