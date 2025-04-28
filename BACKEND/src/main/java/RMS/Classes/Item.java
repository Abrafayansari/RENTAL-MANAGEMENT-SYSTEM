package RMS.Classes;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;

@Document(collection = "items")
@TypeAlias("Item")

public class Item {
    @Id
    protected long itemId;
    protected String itemName;
    protected String category;
    protected double pricePerDay;
    protected boolean isAvailable=true;
    protected String picURL;

    public Item(long itemId, String itemName, String category, double pricePerDay, String picURL) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
        this.pricePerDay = pricePerDay;
        this.picURL = picURL;
    }

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(double pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}