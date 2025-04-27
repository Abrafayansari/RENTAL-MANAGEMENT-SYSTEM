package RMS.Classes;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Clothing extends Item {
    private String size;
    private String material;
    private String gender; // Men, Women

    public Clothing(long itemId, String itemName, double pricePerDay, String picURL, String size, String material, String gender) {
        super(itemId, itemName, "Clothing", pricePerDay, picURL);
        this.size = size;
        this.material = material;
        this.gender = gender;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
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