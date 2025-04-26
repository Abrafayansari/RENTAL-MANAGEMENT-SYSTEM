package RMS.Repository;

import RMS.Classes.Car;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Car_repo extends MongoRepository<Car,Long> {
}
