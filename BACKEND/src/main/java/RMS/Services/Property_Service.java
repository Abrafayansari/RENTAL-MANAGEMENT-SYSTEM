package RMS.Services;

import RMS.Classes.Property;
import RMS.Repository.Property_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class  Property_Service {
    @Autowired
    Property_repo property_repo;

    public boolean uploadProperty(Property p){
        property_repo.save(p);
        return true;
    }
}
