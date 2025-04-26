package RMS.Classes;

import RMS.Classes.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthenticationService {
    private List<User> users = new ArrayList<>(); // temporary in-memory storage

    public String signup(User user) {
        if (isUserExists(user.getEmail())) {
            return "User already exists!";
        }
        user.setPassword(encodePassword(user.getPassword())); // encode password manually
        users.add(user);
        return "Signup successful!";
    }

    public String login(String email, String rawPassword) {
        User user = findUserByEmail(email);
        if (user == null) {
            return "User not found!";
        }
        if (verifyPassword(rawPassword, user.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid password!";
        }
    }

    private boolean isUserExists(String email) {
        for (User user : users) {
            if (user.getEmail().equals(email)) {
                return true;
            }
        }
        return false;
    }

    private User findUserByEmail(String email) {
        for (User user : users) {
            if (user.getEmail().equals(email)) {
                return user;
            }
        }
        return null;
    }

    private String encodePassword(String rawPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.encode(rawPassword);
    }

    private boolean verifyPassword(String rawPassword, String encodedPassword) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder.matches(rawPassword, encodedPassword);
    }
}
