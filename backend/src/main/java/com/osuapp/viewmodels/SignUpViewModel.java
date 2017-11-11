package com.osuapp.viewmodels;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class SignUpViewModel {

    public String email;

    public String password;

    public String encryptedPassword() {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return bCryptPasswordEncoder.encode(password);
    }
}
