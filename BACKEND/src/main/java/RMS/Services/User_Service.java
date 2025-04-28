package RMS.Services;

import RMS.Classes.Item;
import RMS.Classes.User;
import RMS.Repository.Item_repo;
import RMS.Repository.User_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;

@Component
public class User_Service {

    @Autowired
    private User_repo user_repo;

    public  void saveEntry(User user){
        user_repo.save(user);
    }


    public User findUserByEmail(String email) {
        List <User> users=user_repo.findAll();
        for (User user : users) {
            if (user.getEmail().equals(email)) {
                System.out.println(user.getEmail());

                return user;
            }
        }
        return null;

    }
    public List<User> findalluser(){
       return  user_repo.findAll();
    }

    public Optional<User> finduserbyid(Long id){
        return user_repo.findById(id);
    }

    private boolean isUserExists(String email) {
        for (User user : user_repo.findAll()) {
            if (user.getEmail().equals(email)) {
                return true;
            }
        }
        return false;
    }

    public String login(String email, String rawPassword) {
        User user = findUserByEmail(email);
        if (user == null) {
            return "User not found!";
        }
        if (verifyPassword(rawPassword, user.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid password!";
        }
    }

    public String signup(User user) {
        if (isUserExists(user.getEmail())) {
            return "User already exists!";
        }
        user.setPassword(encodePassword(user.getPassword())); // encode password manually
        user_repo.save(user);
        return "Signup successful!";
    }
    private boolean verifyPassword(String rawPassword, String encodedPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.matches(rawPassword, encodedPassword);
    }

    private String encodePassword(String rawPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(rawPassword);
    }

//    public List<Item> findRentedItem(User user){
//        User u = user_repo.findById(user.getId()).orElse(null);
//        return u.getRentedItems();
//    }
@Autowired
private Item_repo item_repo;

    public boolean uploadRentedItem(Long userId, Long itemId) {
        Optional<User> optuser = user_repo.findById(userId);
        Optional<Item> optitem = item_repo.findById(itemId);

        if (optuser.isPresent() && optitem.isPresent()) {
            User user = optuser.get();
            Item item = optitem.get();

            if (item.isAvailable()) {
                item.setAvailable(false);
                user.setRentedItems(item);
                user_repo.save(user);
                item_repo.save(item);
                return true;
            }
        }
        return false;
    }



}
