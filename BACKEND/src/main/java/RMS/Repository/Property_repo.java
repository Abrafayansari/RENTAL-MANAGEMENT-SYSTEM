package RMS.Repository;

import RMS.Classes.Property;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Property_repo extends MongoRepository<Property,Long> {
}
