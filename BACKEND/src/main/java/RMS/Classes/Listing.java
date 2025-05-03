package RMS.Classes;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "items")
@TypeAlias("Listing")
public class Listing extends Item {
    private User owner;
    private String description;


    public Listing( String itemName, String category, double pricePerDay, String picURL, User owner, String description) {
        super(itemName,category,pricePerDay,picURL);
        this.owner = owner;
        this.description = description;
    }
    public Listing(){
        super(); // This calls Item's no-arg constructor
        this.setCategory("Listing"); // Sets category = "Car"
        this.setAvailable(true); // Sets availability to true
        this.setItemId(generateUniqueId()); // Assign unique ID
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}