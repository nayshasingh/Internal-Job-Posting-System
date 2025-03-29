package com.example.internaljobposting.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.internaljobposting.entity.JobPosting;
import com.example.internaljobposting.entity.User;
import com.example.internaljobposting.repository.JobPostingRepository;
import com.example.internaljobposting.repository.UserRepository;

@RestController
public class JobPostingController {
	
	@Autowired
	private JobPostingRepository jobPostingRepository;
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/job_postings")
	public ResponseEntity<Iterable<JobPosting>> getPostings(){
		try {
			Iterable<JobPosting> postings = jobPostingRepository.findAll();
			return ResponseEntity.of(Optional.of(postings));		
		}catch(Exception e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
	}
	
	@PostMapping("/job_postings")
	public ResponseEntity<?> addJobPosting(@RequestBody JobPosting jobPosting, @RequestParam int userId){
		Optional<User> currentUser = userRepository.findById(userId);
		if(currentUser.isEmpty()) {
			return ResponseEntity.status(404).body("user does not exist !");
		}
		if(!currentUser.get().getRole().equals("HR")) {
			return ResponseEntity.status(403).body("Only HR can add Job Postings");
		}
		jobPosting.setHr(currentUser.get());
		jobPostingRepository.save(jobPosting);
		return ResponseEntity.of(Optional.of(jobPosting));
	}
	
}
