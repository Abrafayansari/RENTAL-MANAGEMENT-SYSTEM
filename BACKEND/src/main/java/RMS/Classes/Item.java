package RMS.Classes;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Random;

@Document(collection = "items")
@TypeAlias("Item")

public class Item {
    @Id
    protected long itemId;
    protected String itemName;
    protected String category;
    protected double pricePerDay;
    protected boolean isAvailable;
    protected Long owner_id;
    protected String description;
    protected LocalDate start;
    protected LocalDate end;
    protected String picURL;

    public Item(String itemName, String category, Long owner_id, String description, double pricePerDay, String picURL) {
        this.itemId = generateUniqueId();
        this.itemName = itemName;
        this.category = category;
        this.owner_id = owner_id;
        this.description=description;
        this.pricePerDay = pricePerDay;
        this.isAvailable = true;
        this.picURL = picURL;
    }
    public Item(String itemName, String category, Long owner_id, String description, double pricePerDay, String picURL, LocalDate start, LocalDate end) {
        this.itemId = generateUniqueId();
        this.itemName = itemName;
        this.category = category;
        this.pricePerDay = pricePerDay;
        this.owner_id = owner_id;
        this.description=description;
        this.isAvailable = true;
        this.picURL = picURL;
        this.start=start;
        this.end= end;
    }
    public Item() {
        this.itemId = generateUniqueId();
        this.isAvailable = true;
    }
    public Long getOwner_id() {
        return this.owner_id;
    }

    public void setOwner_id(Long owner_id) {
        this.owner_id = owner_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getStart() {
        return start;
    }

    public void setStart(LocalDate start) {

        this.start = start;
    }

    public LocalDate getEnd() {
        return end;
    }

    public void setEnd(LocalDate end) {
        this.end = end;
    }

    public String getPicURL() {
        return picURL;
    }
    public  long generateUniqueId() {
        long timestamp = System.currentTimeMillis();             // e.g., 1714642200000
        int randomPart = new Random().nextInt(900) + 100;        // random 3-digit number: 100–999
        String idString = timestamp + String.valueOf(randomPart); // concatenate as string
        return Long.parseLong(idString);                         // convert to long
    }
    public void setPicURL(String picURL) {
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
        this.isAvailable = available;
    }
}