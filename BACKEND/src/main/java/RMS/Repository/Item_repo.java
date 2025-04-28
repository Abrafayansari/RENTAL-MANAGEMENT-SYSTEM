package RMS.Repository;

import RMS.Classes.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Item_repo extends MongoRepository<Item, Long> {
}
