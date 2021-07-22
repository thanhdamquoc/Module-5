package com.codegym.angularproductmanagementbackend.controller;

import com.codegym.angularproductmanagementbackend.model.Category;
import com.codegym.angularproductmanagementbackend.service.category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("categories")
public class CategoryRestController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    private ResponseEntity<Iterable<Category>> findAll() {
        return new ResponseEntity<>(categoryService.findAll(), HttpStatus.OK);
    }
}
