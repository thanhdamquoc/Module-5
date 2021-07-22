package com.codegym.angularproductmanagementbackend.service.category;

import com.codegym.angularproductmanagementbackend.model.Category;
import com.codegym.angularproductmanagementbackend.model.Product;
import com.codegym.angularproductmanagementbackend.repository.CategoryRepository;
import com.codegym.angularproductmanagementbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Iterable<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> findById(Long id) {
        return categoryRepository.findById(id);
    }

    @Override
    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }
}
