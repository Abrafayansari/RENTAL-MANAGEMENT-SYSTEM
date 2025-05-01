package RMS.Classes;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "items")
@TypeAlias("Car")
public class Car extends Item {
    private String brand;
    private String Location;
    private String model;
    private int year;
    private String Type;
    private String transmissionType;
    private List<String> Features=new ArrayList<>();
    public Car(long itemId, String itemName,List<String> Features, double pricePerDay, String picURL,String Location, String brand, String model, int year, String Type, String transmissionType) {
        super(itemId, itemName, "Car", pricePerDay, picURL);
        this.brand = brand;
        this.Location=Location;
        this.model = model;
        this.Features=Features;
        this.year = year;
        this.Type = Type;
        this.transmissionType = transmissionType;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
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

    public String getType() {
        return Type;
    }

    public void setType(String Type) {
        this.Type = Type;
    }

    public String getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(String transmissionType) {
        this.transmissionType = transmissionType;
    }
}