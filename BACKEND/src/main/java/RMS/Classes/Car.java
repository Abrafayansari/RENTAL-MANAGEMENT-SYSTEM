package RMS.Classes;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Car extends Item {
    private String brand;
    private String model;
    private int year;
    private String fuelType;
    private String transmissionType;

    public Car(long itemId, String itemName, double pricePerDay, String picURL, String brand, String model, int year, String fuelType, String transmissionType) {
        super(itemId, itemName, "Car", pricePerDay, picURL);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.transmissionType = transmissionType;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
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

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getTransmissionType() {
        return transmissionType;
    }

    public void setTransmissionType(String transmissionType) {
        this.transmissionType = transmissionType;
    }
}