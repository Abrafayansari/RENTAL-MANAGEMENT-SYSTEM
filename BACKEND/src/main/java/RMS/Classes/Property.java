package RMS.Classes;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Property extends Item {
    private String address;
    private int numberOfRooms;
    private double areaInSquareFeet;
    private boolean furnished;

    public Property(long itemId, String itemName, double pricePerDay, String picURL, String address, int numberOfRooms, double areaInSquareFeet, boolean furnished) {
        super(itemId, itemName, "Property", pricePerDay, picURL);
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.areaInSquareFeet = areaInSquareFeet;
        this.furnished = furnished;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public double getAreaInSquareFeet() {
        return areaInSquareFeet;
    }

    public void setAreaInSquareFeet(double areaInSquareFeet) {
        this.areaInSquareFeet = areaInSquareFeet;
    }

    public boolean isFurnished() {
        return furnished;
    }

    public void setFurnished(boolean furnished) {
        this.furnished = furnished;
    }
}