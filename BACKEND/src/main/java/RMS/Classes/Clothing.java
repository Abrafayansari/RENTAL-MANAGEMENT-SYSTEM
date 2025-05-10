package RMS.Classes;

import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="items")
@TypeAlias("Clothing")
public class Clothing extends Item {
    private String size;
    private String material;
    private String gender; // Men, Women
    private String brand;

    public Clothing( String itemName, double pricePerDay,String brand,Long owner_id,String description, String picURL, String size, String material, String gender) {
        super( itemName, "Clothing",owner_id,description, pricePerDay, picURL);
        this.size = size;
        this.material = material;
        this.gender = gender;
        this.brand=brand;
    }
public Clothing(){
    super(); // This calls Item's no-arg constructor
    this.setCategory("Clothing"); // Sets category = "Car"
    this.setAvailable(true); // Sets availability to true
    this.setItemId(generateUniqueId()); // Assign unique ID
}
    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}