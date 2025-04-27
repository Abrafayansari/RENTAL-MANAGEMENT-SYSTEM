package RMS.Classes;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service; // <--- keep this import

import java.util.ArrayList;
import java.util.List;

@Service // <--- don't forget this annotation
public class AuthenticationService {
    private ArrayList<User> users = new ArrayList<>(); // temporary in-memory storage












}
