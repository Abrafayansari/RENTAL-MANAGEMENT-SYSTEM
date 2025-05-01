package RMS.Repository;

import RMS.Classes.Car;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface Car_repo extends MongoRepository<Car,Long> {
    List<Car> findByItemNameContainingIgnoreCase(String itemName);
}
