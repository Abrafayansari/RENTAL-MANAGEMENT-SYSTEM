package RMS.Services;

import RMS.Classes.Car;
import RMS.Classes.Clothing;
import RMS.Classes.Item;
import RMS.Classes.Property;
import RMS.Repository.Item_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Item_Service {

    @Autowired
    Item_repo item_repo;

    // Get all items from the repository
    public List<Item> getitem() {
        return item_repo.findAll();
    }

    // Generic method to filter items by category and type
    private <T extends Item> List<T> filterItemsByCategory(String category, Class<T> clazz) {
        List<T> result = new ArrayList<>();
        for (Item i : this.getitem()) {
            if (category.equalsIgnoreCase(i.getCategory()) && clazz.isInstance(i)) {
                result.add(clazz.cast(i));
            }
        }
        return result;
    }

    // Specific getters using the generic filter method
    public List<Car> getcar() {
        return filterItemsByCategory("Car", Car.class);
    }

    public List<Clothing> getcloth() {
        return filterItemsByCategory("Clothing", Clothing.class);
    }

    public List<Property> getproperty() {
        return filterItemsByCategory("Property", Property.class);
    }
}
