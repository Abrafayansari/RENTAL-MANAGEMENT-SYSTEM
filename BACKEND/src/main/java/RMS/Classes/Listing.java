package RMS.Classes;


public class Listing {
    private long listingId;
    private Item item;
    private User owner;
    private String description;

    public Listing(long listingId, Item item, User owner, String description) {
        this.listingId = listingId;
        this.item = item;
        this.owner = owner;
        this.description = description;
    }

    public long getListingId() {
        return listingId;
    }

    public void setListingId(long listingId) {
        this.listingId = listingId;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
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