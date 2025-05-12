package RMS.Repository;

import RMS.Classes.Clothing;
import RMS.Classes.Property;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface Property_repo extends MongoRepository<Property,Long> {
    List<Property> findByItemNameContainingIgnoreCase(String itemName);

//    List<Property> findByLocationIgnoreCaseAndPropertyTypeIgnoreCaseAndBedrooms(String location, String propertyType, int bedrooms);
}
