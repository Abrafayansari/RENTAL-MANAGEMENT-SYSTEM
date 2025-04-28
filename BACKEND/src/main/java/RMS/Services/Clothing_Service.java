package RMS.Services;

import RMS.Classes.Clothing;
import RMS.Repository.Clothing_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Clothing_Service {

    @Autowired
    Clothing_repo clothing_repo;

    public boolean upload_clothing(Clothing c){
        clothing_repo.save(c);
        return true;
    }
}
