package com.codegym.angularproductmanagementbackend.service.role;

import com.codegym.angularproductmanagementbackend.model.Role;
import com.codegym.angularproductmanagementbackend.service.GeneralService;

public interface RoleService extends GeneralService<Role> {
    Role findByName(String name);
}
