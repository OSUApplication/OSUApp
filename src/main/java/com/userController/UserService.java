package com.userController;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface UserService {

	List<User> getAllUser();
}
