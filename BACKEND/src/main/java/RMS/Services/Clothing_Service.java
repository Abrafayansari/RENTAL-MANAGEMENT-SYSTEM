package RMS.Services;

import RMS.Classes.Car;
import RMS.Classes.Clothing;
import RMS.Repository.Clothing_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Clothing_Service {

    @Autowired
    private Clothing_repo clothing_repo;

    public Clothing upload_clothing(Clothing c){
        clothing_repo.save(c);
        return c;
    }
    public List<Clothing> findcloth(){
        return clothing_repo.findAll();
    }

    public List<Clothing> searchClothesByName(String name) {
        return clothing_repo.findByItemNameContainingIgnoreCase(name);
    }
}
