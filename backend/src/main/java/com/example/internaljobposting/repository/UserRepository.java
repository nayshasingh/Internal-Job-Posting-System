package com.example.internaljobposting.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.internaljobposting.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	public User findByUsername(String username);
	public List<User> findByRole(String role);
}
