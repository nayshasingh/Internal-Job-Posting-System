package com.example.internaljobposting.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.internaljobposting.entity.JobPosting;

public interface JobPostingRepository extends CrudRepository<JobPosting, Integer>{

}
