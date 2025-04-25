package com.spboot.spboot.Controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
public class firstroute {

ArrayList <Person>persons=new ArrayList<>();
    @GetMapping("/home")
    public String home(){
        return "hello home ";
    }

    @PostMapping("/user")
    public String create_user(@RequestBody Person p){
        persons.add(p);
        return "Success";
    }

    @PutMapping("/update-user")
    public ArrayList <Person> create(@RequestBody String name){
        for(Person p:persons){
            if(p.getName().equalsIgnoreCase(name)){
                p.setName("rafay");
            }
        }
        return persons;
    }


@GetMapping("/getuser")
    public ArrayList <Person>getuser(){
        return persons;
}

@GetMapping("/getuser/{name}")
    public Person findbyname(@PathVariable String name){
        Person p2=null;
for(Person p:persons){
    if(p.getName().equals(name)){
        p2=p;
    }
}
return p2;
}


    @DeleteMapping("/deleteuser/{name}")
    public String deletebyname(@PathVariable String name){
        for(Person p:persons){
            if(p.getName().equals(name)){
                persons.remove(p);
            }
        }
        return "deleted";
    }
}
