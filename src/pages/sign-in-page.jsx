"use client"
import axios from "axios"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { UserContext } from "../hooks/Context"

export default function SignInPage() {
  const {setUser}=useContext(UserContext)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
///checking
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First Login Attempt
      const loginResponse = await axios.post("http://localhost:1234/login", formData);
      console.log("Login Successful", loginResponse.data);
      alert(loginResponse.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed or User not found! Please check your email and password.");
    }
try{


      // Then Fetch User Info by Email
      const userResponse = await axios.post(`http://localhost:1234/finduserbyemail/${formData.email}`);
      console.log("Fetched User Data", userResponse.data);
      setUser(userResponse.data);
  
      // Optionally you can navigate to homepage
      // navigate("/dashboard");
      
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed or User not found! Please check your email and password.");
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-24 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Welcome Back</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign in to your account to manage your rentals and bookings
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Card>
              <CardContent className="!p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Password
                      </label>
                      <Link to="/forget-password" className="text-sm text-primary underline-offset-4 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="text-primary underline-offset-4 hover:underline">
                    Sign up
                  </Link>
                </div>
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <FaGoogle className="w-4 h-4 mr-4"/> Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FaFacebook  className="w-4 h-4 mr-4"/>
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>
    </section>
  )
}
