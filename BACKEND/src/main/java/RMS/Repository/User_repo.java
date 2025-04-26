package RMS.Repository;

import RMS.Classes.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface User_repo extends MongoRepository<User,Long> {

}
