package com.codegym.angularproductmanagementbackend.service.user;

import com.codegym.angularproductmanagementbackend.model.User;
import com.codegym.angularproductmanagementbackend.service.GeneralService;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService extends GeneralService<User>, UserDetailsService {
    Optional<User> findByUsername(String username);
}
