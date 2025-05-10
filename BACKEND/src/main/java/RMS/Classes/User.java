package RMS.Classes;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Document
public class User {
    public static long user_Count=0;
    @Id
    private Long id=generateUniqueId();
    private String name;
    private String email;
    private String phoneNumber;
    private String password;
    private String address;
    private List <Item> rentedItems;
    private List<Item> listings;

    public User(String name, String email, String phoneNumber, String password, String address) {
        this.name = name;

        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.address = address;
        this.rentedItems=new ArrayList<>();
        this.listings = new ArrayList<>();
        user_Count++;
        this.id =user_Count;
    }public User(){
        this.id=generateUniqueId();

    }

    public static long getUser_Count() {
        return user_Count;
    }

    public static void setUser_Count(long user_Count) {
        User.user_Count = user_Count;
    }
    public  long generateUniqueId() {
        long timestamp = System.currentTimeMillis();             // e.g., 1714642200000
        int randomPart = new Random().nextInt(900) + 100;        // random 3-digit number: 100–999
        String idString = timestamp + String.valueOf(randomPart); // concatenate as string
        return Long.parseLong(idString);                         // convert to long
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

    public List<Item> getRentedItems() {
        return rentedItems;
    }

    public void setRentedItems(Item rentedItems) {
        this.rentedItems.add(rentedItems);
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Item> getListings() {
        return listings;
    }

    public void setListings(Item listings) {

        this.listings.add(listings);
    }
}

