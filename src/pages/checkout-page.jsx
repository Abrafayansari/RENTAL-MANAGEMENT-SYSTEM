"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, CreditCard, Calendar, Lock, CheckCircle } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Mock rental item data
  const rentalItem = {
    id: "property-1",
    title: "Modern Downtown Apartment",
    location: "New York, NY",
    image: "https://placehold.co/600x400",
    startDate: "2023-06-15",
    endDate: "2023-06-20",
    price: 150,
    days: 5,
    subtotal: 750,
    serviceFee: 75,
    total: 825,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)

      // Redirect to confirmation after a delay
      setTimeout(() => {
        navigate("/dashboard")
      }, 2000)
    }, 2000)
  }

  if (isComplete) {
    return (
      <div className="container py-12 md:py-24 max-w-3xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Payment Successful!</h1>
          <p className="text-muted-foreground">
            Your booking has been confirmed. You'll receive a confirmation email shortly.
          </p>
          <Button className="mt-6" asChild>
            <Link to="/dashboard">View Your Bookings</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 max-w-6xl">
      <Link
        to="/properties/property-1"
        className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to listing
      </Link>

      <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {/* Trip Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Your Trip</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Dates</p>
                    <p className="font-medium">
                      {new Date(rentalItem.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })} -{" "}
                      {new Date(rentalItem.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium">{rentalItem.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="credit-card" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      <span>Credit Card</span>
                    </TabsTrigger>
                    <TabsTrigger value="paypal" className="flex items-center gap-2">
                      <span className="font-bold text-blue-600">Pay</span>
                      <span className="font-bold text-blue-800">Pal</span>
                    </TabsTrigger>
                    <TabsTrigger value="apple-pay" className="flex items-center gap-2">
                      <span className="font-bold">Apple Pay</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="card-number" className="block text-sm font-medium mb-1">
                          Card Number
                        </label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                            Expiry Date
                          </label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <label htmlFor="cvc" className="block text-sm font-medium mb-1">
                            CVC
                          </label>
                          <Input id="cvc" placeholder="123" required />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name on Card
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center">
                          <Lock className="h-4 w-4 text-muted-foreground mr-2" />
                          <p className="text-sm text-muted-foreground">
                            Your payment information is secure and encrypted
                          </p>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : "Complete Booking"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="paypal">
                    <div className="text-center py-8">
                      <p className="mb-4">You'll be redirected to PayPal to complete your payment.</p>
                      <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : "Continue with PayPal"}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="apple-pay">
                    <div className="text-center py-8">
                      <p className="mb-4">You'll be prompted to confirm payment with Apple Pay.</p>
                      <Button
                        onClick={handleSubmit}
                        className="bg-black hover:bg-black/90 text-white"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : "Pay with Apple Pay"}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Billing Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Billing Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <Input id="first-name" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <Input id="last-name" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <Input id="address" required />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium mb-1">
                        City
                      </label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium mb-1">
                        State
                      </label>
                      <Input id="state" required />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium mb-1">
                        ZIP
                      </label>
                      <Input id="zip" required />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="flex items-start gap-4 pb-4 border-b">
                <img
                  src={rentalItem.image || "/placeholder.svg"}
                  alt={rentalItem.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium">{rentalItem.title}</h3>
                  <p className="text-sm text-muted-foreground">{rentalItem.location}</p>
                  <div className="flex items-center text-sm mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>
                      {new Date(rentalItem.startDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })} -{" "}
                      {new Date(rentalItem.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>
                    ${rentalItem.price} × {rentalItem.days} nights
                  </span>
                  <span>${rentalItem.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>${rentalItem.serviceFee}</span>
                </div>
                <div className="flex justify-between font-bold pt-4 border-t mt-4">
                  <span>Total</span>
                  <span>${rentalItem.total}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                <p>
                  By completing this booking, you agree to our{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
