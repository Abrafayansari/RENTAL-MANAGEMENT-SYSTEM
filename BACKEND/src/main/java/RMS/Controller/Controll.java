package RMS.Controller;

import RMS.Classes.User;
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

}
