package com.example.springboot08.controller;

import java.util.List;

import com.example.springboot08.model.Contact;
import com.example.springboot08.model.Customer;
import com.example.springboot08.repo.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @RequestMapping(path = "/customers", method = RequestMethod.GET)
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @RequestMapping(value = "/customers/{customerId}/contacts", method = RequestMethod.GET)
    public List<Contact> getCustomerContacts(@PathVariable("customerId") Long customerId) {
        return customerRepository.findOne(customerId).getContacts();
    }
}
