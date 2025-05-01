package RMS.Services;

import RMS.Classes.Clothing;
import RMS.Repository.Clothing_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Clothing_Service {

    @Autowired
    private Clothing_repo clothing_repo;

    public boolean upload_clothing(Clothing c){
        clothing_repo.save(c);
        return true;
    }

    public List<Clothing> searchClothesByName(String name) {
        return clothing_repo.findByItemNameContainingIgnoreCase(name);
    }
}
