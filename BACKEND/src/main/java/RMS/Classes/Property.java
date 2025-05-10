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
    private String location;
    private List<String> features=new ArrayList<>();

    public Property(String location,List<String> features,Long owner_id, String description,String itemName,String Type, double pricePerDay, String picURL, String address, int numberOfRooms, double areaInSquareFeet, boolean furnished) {
        super( itemName, "Property", owner_id,description,pricePerDay, picURL);
        this.address = address;
        this.location=location;
        this.features=features;
        this.type=Type;
        this.numberOfRooms = numberOfRooms;
        this.areaInSquareFeet = areaInSquareFeet;
        this.furnished = furnished;
    }
public Property(){
    super(); // This calls Item's no-arg constructor
    this.setCategory("Property"); // Sets category = "Car"
    this.setAvailable(true); // Sets availability to true
    this.setItemId(generateUniqueId()); // Assign unique ID
}
    public String getAddress() {
        return address;
    }

    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
       this.features = features;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getlocation() {
        return location;
    }

    public void setlocation(String location) {
        this.location = location;
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