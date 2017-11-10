package com.osuapp.viewmodels;

import jdk.nashorn.internal.objects.annotations.Property;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class SignUpViewModel {

    @Property
    public String email;

    @Property
    public String password;

    public String encryptedPassword() {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return bCryptPasswordEncoder.encode(password);
    }
}
