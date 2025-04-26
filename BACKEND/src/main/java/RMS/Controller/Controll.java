package RMS.Controller;

import RMS.Classes.Car;
import RMS.Classes.Login;
import RMS.Classes.User;
import RMS.Services.Car_Service;
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



        /// ////////////////car////////////////

    @Autowired
    private Car_Service car_service;

    @PostMapping("/upload-car")
    Car upload_Car(@RequestBody Car car){
       return car_service.upload_Car(car);

    }


}
