package RMS.Controller;

import RMS.Classes.*;
import RMS.Services.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.mongodb.client.gridfs.model.GridFSFile;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.InputStream;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class Controll {

    @Autowired
    private User_Service user_service;

    @Autowired
    private GridFsTemplate gridFsTemplate;

    @Autowired
    private GridFsOperations operations;

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

//        @PostMapping("/findUserListedItem")
//            public List<Item> findItems(@RequestBody User user){
//            return user.getRentedItems();
//        }
    @PostMapping("/uploadrenteditems/{userid}/{itemid}")
    public Optional<User> uploadrentaeditems(@PathVariable Long userid, @PathVariable Long itemid ){
       boolean clearance= user_service.uploadRentedItem(userid,itemid);
       if(clearance){
           return user_service.finduserbyid(userid);
       }

        return null;
    }



        ///////////////////car////////////////

    @Autowired
    private Car_Service car_service;

    @PostMapping(value = "/upload-car", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Car uploadCar(@RequestPart("car") String carJson, @RequestPart("file") MultipartFile file) throws IOException {
        // Convert JSON string to Car object manually
        ObjectMapper mapper = new ObjectMapper();
        Car car = mapper.readValue(carJson, Car.class);

        ObjectId fileId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
        car.setPicURL(fileId.toHexString());

        return car_service.upload_Car(car);
    }


    @GetMapping("/findAll-car")
    public List<Car> findCar(){

        return car_service.findCar();
    }

    @GetMapping("/search-car")
    public List<Car> searchCarByName(@RequestParam String name) {
        return car_service.searchCarsByName(name);
    }

    ///////////////////clothing////////////////

    @Autowired
    Clothing_Service clothing_service;

//    @PostMapping("/upload-clothing")
//    public Clothing upload_clothes(@RequestBody Clothing c){
//        clothing_service.upload_clothing(c);
//        return c;
//    }

    @GetMapping("/findAll-clothing")
    public List<Clothing> findcloth(){
        return clothing_service.findcloth();
    }

     @PostMapping(value = "/upload-clothing", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Clothing uploadClothing(@RequestPart("cloth") String clothJson, @RequestPart("file") MultipartFile file) throws IOException {
        // Convert JSON string to cloth object manually
        ObjectMapper mapper = new ObjectMapper();
        Clothing cloth = mapper.readValue(clothJson, Clothing.class);

        ObjectId fileId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
        cloth.setPicURL(fileId.toHexString());

        return clothing_service.upload_clothing(cloth);
    }

    @GetMapping("/search-clothing")
    public List<Clothing> searchClothingByName(@RequestParam String name) {
        return clothing_service.searchClothesByName(name);
    }

    ///////////////////Property////////////////

    @Autowired
    Property_Service property_service;

//    @PostMapping("/upload-property")
//    public Property upload_property(@RequestBody Property p){
//        property_service.uploadProperty(p);
//        return p;
//    }

    @PostMapping(value = "/upload-property", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Property uploadproperty(@RequestPart("property") String propertyJson, @RequestPart("file") MultipartFile file) throws IOException {
        // Convert JSON string to cloth object manually
        ObjectMapper mapper = new ObjectMapper();
        Property property = mapper.readValue(propertyJson, Property.class);

        ObjectId fileId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
        property.setPicURL(fileId.toHexString());

        return property_service.uploadProperty(property);
    }

    @GetMapping("/search-property")
    public List<Property> searchPropertyByName(@RequestParam String name) {
        return property_service.searchPropertiesByName(name);
    }

    /// ////////////////////Item////////////////
    @Autowired
    Item_Service item_service;
    @GetMapping("/getallitem")
    public List<Item>getallitem(){
        return  item_service.getitem();
    }

    @GetMapping("/getallcar")
    public List<Car>getallcar(){
        return item_service.getcar();
    }
    @GetMapping("/getallcloth")
    public List<Clothing>getallcloth(){
        return item_service.getcloth();
    }

    @GetMapping("/getallproperty")
    public List<Property>getallproperty(){
        return item_service.getproperty();
    }



    /// //////////////image///////////////////




    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        ObjectId fileId = gridFsTemplate.store(file.getInputStream(), file.getOriginalFilename(), file.getContentType());
        return ResponseEntity.ok(fileId.toHexString()); // Return the file ID
    }

    @GetMapping("/{id}")
    public void getImageById(@PathVariable String id, HttpServletResponse response) throws IOException {
        GridFSFile file = gridFsTemplate.findOne(Query.query(Criteria.where("_id").is(id)));

        if (file == null) {
            response.setStatus(HttpStatus.NOT_FOUND.value());
            return;
        }

        try (InputStream is = operations.getResource(file).getInputStream()) {
            response.setContentType(file.getMetadata().get("_contentType").toString());
            IOUtils.copy(is, response.getOutputStream());
            response.flushBuffer();
        }
    }
}
