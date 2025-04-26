package RMS.Services;

import RMS.Classes.User;
import RMS.Repository.User_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class User_Service {

    @Autowired
    private User_repo user_repo;

    public  void saveEntry(User user){
        user_repo.save(user);
    }

    public List<User> findalluser(){
       return  user_repo.findAll();
    }

    public Optional<User> finduserbyid(Long id){
        return user_repo.findById(id);
    }
}
