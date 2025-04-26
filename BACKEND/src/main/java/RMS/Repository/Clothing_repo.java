package RMS.Repository;

import RMS.Classes.Clothing;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Clothing_repo extends MongoRepository<Clothing,Long> {
}
