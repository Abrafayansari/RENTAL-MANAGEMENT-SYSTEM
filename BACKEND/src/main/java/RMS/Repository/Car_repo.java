package RMS.Repository;

import RMS.Classes.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface Car_repo extends MongoRepository<Car,Long> {
    List<Car> findByItemNameContainingIgnoreCase(String itemName);

//    List<Car> findByBrandIgnoreCaseAndModelIgnoreCaseAndLocationIgnoreCase(String brand, String model, String location);

//    @Query("SELECT c FROM Car c WHERE " +
//            "(:brand IS NULL OR c.brand = :brand) AND " +
//            "(:model IS NULL OR c.model = :model) AND " +
//            "(:location IS NULL OR c.location = :location)")
//    List<Car> searchCars(@Param("brand") String brand, @Param("model") String model, @Param("location") String location);
}
