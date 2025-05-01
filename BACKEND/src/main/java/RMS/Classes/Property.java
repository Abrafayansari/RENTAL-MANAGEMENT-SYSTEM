package RMS.Classes;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "items")
@TypeAlias("Property")
public class Property extends Item {
    private String address;
    private int numberOfRooms;
    private double areaInSquareFeet;
    private boolean furnished;
    private String type;
    private String Location;
    private List<String> Features=new ArrayList<>();

    public Property(long itemId,String Location,List<String> Features, String itemName,String Type, double pricePerDay, String picURL, String address, int numberOfRooms, double areaInSquareFeet, boolean furnished) {
        super(itemId, itemName, "Property", pricePerDay, picURL);
        this.address = address;
        this.Location=Location;
        this.Features=Features;
        this.type=Type;
        this.numberOfRooms = numberOfRooms;
        this.areaInSquareFeet = areaInSquareFeet;
        this.furnished = furnished;
    }

    public String getAddress() {
        return address;
    }

    public List<String> getFeatures() {
        return Features;
    }

    public void setFeatures(List<String> features) {
        Features = features;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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