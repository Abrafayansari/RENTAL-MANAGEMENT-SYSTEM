package RMS.Repository;

import RMS.Classes.Car;
import RMS.Classes.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface Item_repo extends MongoRepository<Item, Long> {
//    List<Item> findByBrandIgnoreCaseAndModelIgnoreCaseAndLocationIgnoreCase(String brand, String model, String location);
//    @Query(value = "{ '_class' : 'com.yourpackage.Car', " +
//            "'brand' : { $regex: ?0, $options: 'i' }, " +
//            "'model' : { $regex: ?1, $options: 'i' }, " +
//            "'location' : { $regex: ?2, $options: 'i' } }")
//    List<Item> findCarsByBrandModelLocation(String brand, String model, String location);
}

