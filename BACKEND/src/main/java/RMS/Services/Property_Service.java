package RMS.Services;

import RMS.Classes.Clothing;
import RMS.Classes.Property;
import RMS.Exception.ResourceNotFoundException;
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

//    public List<Property> searchProperties(String location, String propertyType, int bedrooms) throws ResourceNotFoundException {
//        List<Property> results = property_repo.findByLocationIgnoreCaseAndPropertyTypeIgnoreCaseAndBedrooms(location, propertyType, bedrooms);
//        if (results.isEmpty()) {
//            throw new ResourceNotFoundException("No properties found matching the search criteria.");
//        }
//        return results;
//    }
}
