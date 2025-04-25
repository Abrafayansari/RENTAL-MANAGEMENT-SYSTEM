package com.spboot.spboot.Controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;


public class User {
    public static long user_Count=0;
    private Long id;
    private String name;
    private String email;
    private String phoneNumber;
    private String password;
    private String address;
    private ArrayList<Item> rentedItems;
    private ArrayList<Listings> listings;

    public User(String name, String email, String phoneNumber, String password, String address) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.address = address;
        this.listings = new ArrayList<>();
        this.rentedItems = new ArrayList<>();
        user_Count++;
        this.id =user_Count;


    }

    public static long getUser_Count() {
        return user_Count;
    }

    public static void setUser_Count(long user_Count) {
        User.user_Count = user_Count;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<Item> getRentedItems() {
        return rentedItems;
    }

    public void setRentedItems(ArrayList<Item> rentedItems) {
        this.rentedItems = rentedItems;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public ArrayList<Listings> getListings() {
        return listings;
    }

    public void setListings(ArrayList<Listings> listings) {
        this.listings = listings;
    }


}

