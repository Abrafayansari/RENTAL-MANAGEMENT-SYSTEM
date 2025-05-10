package RMS.Classes;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "items")
@TypeAlias("Car")
public class Car extends Item {
    private String brand;
    private String location;
    private String model;
    private int year;
    private String type;
    private String transmissiontype;
    private List<String> features=new ArrayList<>();
    public Car( String itemName,List<String> Features,Long owner_id,String description, double pricePerDay, String picURL,String location, String brand, String model, int year, String type, String transmissionType) {
        super( itemName, "Car",owner_id,description, pricePerDay, picURL);
        this.brand = brand;
        this.location=location;
        this.model = model;
        this.features=Features;
        this.year = year;

        this.type = type;
        this.transmissiontype = transmissionType;
    }
    public void setCategory(){
        this.category="Car";
    }
    public Car() {
        super(); // This calls Item's no-arg constructor
        this.setCategory(); // Sets category = "Car"
        this.setAvailable(true); // Sets availability to true
        this.setItemId(generateUniqueId()); // Assign unique ID
    }
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
       this.location = location;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getTransmissiontype() {
        return transmissiontype;
    }

    public void setTransmissiontype(String transmissiontype) {
        this.transmissiontype = transmissiontype;
    }

    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
        this.features = features;
    }

    public String getType() {
        return type;
    }

    public void setType(String Type) {
        this.type = Type;
    }

    public String getTransmissionType() {
        return transmissiontype;
    }

    public void setTransmissionType(String transmissionType) {
        this.transmissiontype = transmissionType;
    }
}