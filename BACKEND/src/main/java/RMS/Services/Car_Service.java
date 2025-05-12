package RMS.Services;

import RMS.Classes.Car;
import RMS.Exception.ResourceNotFoundException;
import RMS.Repository.Car_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Car_Service {

    @Autowired
    private Car_repo car_repo;

    public Car upload_Car(Car car){
        car_repo.save(car);
        return car;
    }

    public List<Car> findCar(){
        return car_repo.findAll();
    }

    public List<Car> searchCarsByName(String name) {
        return car_repo.findByItemNameContainingIgnoreCase(name);
    }
}
