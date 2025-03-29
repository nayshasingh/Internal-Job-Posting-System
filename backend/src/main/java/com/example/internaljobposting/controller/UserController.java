package com.example.internaljobposting.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.internaljobposting.entity.User;
import com.example.internaljobposting.repository.UserRepository;

@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/users")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		try {
			userRepository.save(user);
			return ResponseEntity.of(Optional.of(user));
		}catch(Exception e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User user) {
		Optional<User> existingUser = Optional.ofNullable(userRepository.findByUsername(user.getUsername()));
		if(existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
//			return ResponseEntity.ok("login successful");
			return ResponseEntity.ok(existingUser.get());
		}
		return ResponseEntity.status(401).body("Invalid credentials");
		
	}
	
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getCandidates(@RequestParam String role){
		try {
			List<User> users = userRepository.findByRole(role);
			return ResponseEntity.of(Optional.of(users));
		}catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		
	}
}
