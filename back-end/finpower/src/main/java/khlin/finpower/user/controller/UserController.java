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
@RequestMapping("/api/user")
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

    @PostMapping("/{id}/deactivate")
    public ResponseEntity<User> deactivateUser(@PathVariable String id) {
        User inactiveUser = userService.deactivateUser(id);
        return new ResponseEntity<>(inactiveUser, HttpStatus.OK);
    }
}
