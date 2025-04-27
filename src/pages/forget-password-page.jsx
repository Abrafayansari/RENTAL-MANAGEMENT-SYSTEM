import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { FaFacebook, FaGoogle } from "react-icons/fa"

export default function ForgetPassword() {
  const [formData, setFormData] = useState({
    email: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("") // Clear error on input change
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.")
      return
    }

    // Simulate sending a reset link (replace with actual API call)
    console.log("Password reset request for:", formData.email)

    // Simulate success response
    setSuccess("A password reset link has been sent to your email.")
    setError("")
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-24 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Forgot Your Password?
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enter your email address below, and we'll send you a link to reset your password.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Card>
              <CardContent className="!p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Input */}
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
                      aria-invalid={error ? "true" : "false"}
                      aria-describedby="email-error"
                    />
                    {error && (
                      <p id="email-error" className="text-sm text-destructive">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full">
                    Send Reset Link
                  </Button>
                </form>
                {/* Success Message */}
                {success && (
                  <p className="mt-4 text-sm text-green-600">
                    {success}
                  </p>
                )}
                {/* Sign-In Link */}
                <div className="mt-4 text-center text-sm">
                  Remember your password?{" "}
                  <Link to="/sign-in" className="text-primary underline-offset-4 hover:underline">
                    Sign In
                  </Link>
                </div>
                {/* Divider */}
                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>
                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <FaGoogle className="w-4 h-4 mr-2" /> Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FaFacebook className="w-4 h-4 mr-2" /> Facebook
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