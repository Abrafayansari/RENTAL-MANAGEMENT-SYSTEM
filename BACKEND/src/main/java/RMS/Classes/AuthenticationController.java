package RMS.Classes;

// import RMS.Classes.User;
// import RMS.Services.AuthenticationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return authenticationService.signup(user);
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password) {
        return authenticationService.login(email, password);
    }
}
