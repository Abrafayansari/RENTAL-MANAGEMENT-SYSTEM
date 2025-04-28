package RMS.Controller;

import RMS.Classes.*;
import RMS.Services.Car_Service;
import RMS.Services.Clothing_Service;
import RMS.Services.Property_Service;
import RMS.Services.User_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class Controll {

    @Autowired
    private User_Service user_service;

    @PostMapping("/user")
    public boolean create_user(@RequestBody User u){
        user_service.saveEntry(u);
        return true;
    }

    @GetMapping("/findalluser")
    public List findalluser(){
       return user_service.findalluser();

    }
    @PostMapping("/finduserbyid/{id}")
        public Optional<User> finduserbyid(@PathVariable Long id){
        return user_service.finduserbyid(id);
        }
        @PostMapping("/finduserbyemail/{email}")
    public User finduserbyemail(@PathVariable String email){
            return user_service.findUserByEmail(email);

        }
    @PostMapping("/signup")
    String signup(@RequestBody User user){
       return user_service.signup(user);
    }

//        @Autowired
//        private Login login;
        @PostMapping("/login")
        String login(@RequestBody Login login){
return user_service.login(login.getEmail(),login.getPassword());
        }

        @PostMapping("/findUserListedItem")
            public List<Item> findItems(@RequestBody User user){
            return user.getRentedItems();
        }



        ///////////////////car////////////////

    @Autowired
    private Car_Service car_service;

    @PostMapping("/upload-car")
    Car upload_Car(@RequestBody Car car){
       return car_service.upload_Car(car);
    }

    @GetMapping("/findAll-car")
    public List<Car> findCar(){
        return car_service.findCar();
    }

    ///////////////////clothing////////////////

    @Autowired
    Clothing_Service clothing_service;

    @PostMapping("/upload-clothing")
    public Clothing upload_clothes(@RequestBody Clothing c){
        clothing_service.upload_clothing(c);
        return c;
    }

    ///////////////////Property////////////////

    @Autowired
    Property_Service property_service;

    @PostMapping("/upload-property")
    public Property upload_property(@RequestBody Property p){
        property_service.uploadProperty(p);
        return p;
    }
}
