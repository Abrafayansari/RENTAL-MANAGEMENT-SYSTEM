package RMS.Repository;

import RMS.Classes.Car;
import RMS.Classes.Clothing;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface Clothing_repo extends MongoRepository<Clothing,Long> {
    List<Clothing> findByItemNameContainingIgnoreCase(String itemName);}
