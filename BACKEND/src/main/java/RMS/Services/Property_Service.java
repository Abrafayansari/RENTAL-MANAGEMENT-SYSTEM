package RMS.Services;

import RMS.Classes.Clothing;
import RMS.Classes.Property;
import RMS.Repository.Property_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class  Property_Service {
    @Autowired
    private Property_repo property_repo;

    public Property uploadProperty(Property p){
        property_repo.save(p);
        return p;
    }

    public List<Property> searchPropertiesByName(String name) {
        return property_repo.findByItemNameContainingIgnoreCase(name);
    }
}
