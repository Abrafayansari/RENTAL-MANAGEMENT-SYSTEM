package RMS.Services;

import RMS.Classes.Car;
import RMS.Classes.Clothing;
import RMS.Classes.Item;
import RMS.Classes.Property;
import RMS.Repository.Item_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Item_Service {

    @Autowired
    Item_repo item_repo;

    public List<Item> getitem(){
        return item_repo.findAll();
    }

    public List<Car> getcar(){
      List<Item>items=  getitem();
      List<Car>cars=new ArrayList();
      for (Item i:items){
          if(i.getCategory().equalsIgnoreCase("car")) {
              cars.add((Car) i);
          }
      }
      return cars;
    }
    public List<Clothing> getcloth(){
        List<Item>items=  getitem();
        List<Clothing>clothes=new ArrayList();
        for (Item i:items){
            if(i.getCategory().equalsIgnoreCase("Clothing")) {
                clothes.add((Clothing) i);
            }
        }
        return clothes;
    }


    public List<Property> getproperty(){
        List<Item>items=  getitem();
        List<Property>properties=new ArrayList();
        for (Item i:items){
            if(i.getCategory().equalsIgnoreCase("Property")) {
                properties.add((Property) i);
            }
        }
        return properties;
    }
}
