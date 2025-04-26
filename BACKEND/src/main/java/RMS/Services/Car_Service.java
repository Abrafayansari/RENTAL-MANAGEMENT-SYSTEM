package RMS.Services;

import RMS.Classes.Car;
import RMS.Repository.Car_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car_Service {

    @Autowired
    private Car_repo car_repo;

    public Car upload_Car(Car car){
        car_repo.save(car);
        return car;
    }
}
