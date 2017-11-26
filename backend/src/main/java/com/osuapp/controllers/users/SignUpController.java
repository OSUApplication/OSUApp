package com.osuapp.controllers.users;

import com.osuapp.model.User;
import com.osuapp.service.repository.UserService;
import com.osuapp.viewmodels.SignUpViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RestController
@RequestMapping("/auth")
public class SignUpController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/signup", method= RequestMethod.POST)
    public ResponseEntity<?> signup(@RequestBody SignUpViewModel viewModel) throws URISyntaxException {
        User existingUser = userService.getUser(viewModel.email);

        if(existingUser != null) {
            return new ResponseEntity<Object>(null, HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.name = viewModel.name;
        user.email = viewModel.email;
        user.password = viewModel.encryptedPassword();

        return userService.addUser(user);
    }

}
