package com.codegym.angularproductmanagementbackend.repository;

import com.codegym.angularproductmanagementbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
