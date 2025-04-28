package RMS.Classes;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "items")
@TypeAlias("Listing")
public class Listing extends Item {
    private User owner;
    private String description;


    public Listing(long itemId, String itemName, String category, double pricePerDay, String picURL, User owner, String description) {
        super(itemId,itemName,category,pricePerDay,picURL);
        this.owner = owner;
        this.description = description;
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