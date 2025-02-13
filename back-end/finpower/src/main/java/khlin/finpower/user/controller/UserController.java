package khlin.finpower.user.controller;

import jakarta.validation.Valid;
import khlin.finpower.user.dto.UserDto;
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

    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody UserDto userDto) {
        User createdUser = userService.createUser(userDto);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @PatchMapping("{id}/disable")
    public ResponseEntity<User> disableUser(@PathVariable String id) {
        User inactiveUser = userService.disableUser(id);
        return new ResponseEntity<>(inactiveUser, HttpStatus.OK);
    }

    @PatchMapping("{id}/activate")
    public ResponseEntity<User> activateUser(@PathVariable String id) {
        User inactiveUser = userService.activateUser(id);
        return new ResponseEntity<>(inactiveUser, HttpStatus.OK);
    }
}
