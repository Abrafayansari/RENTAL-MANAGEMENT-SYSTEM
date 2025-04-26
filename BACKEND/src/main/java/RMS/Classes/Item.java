package RMS.Classes;


public class Item {
    protected long itemId;
    protected String itemName;
    protected String category;
    protected double pricePerDay;
    protected boolean isAvailable;

    public Item(long itemId, String itemName, String category, double pricePerDay) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
        this.pricePerDay = pricePerDay;
        this.isAvailable = true;
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