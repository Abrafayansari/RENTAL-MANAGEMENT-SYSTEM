"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  User,
  CreditCard,
  Heart,
  LogOut,
  Calendar,
  MapPin,
  Building,
  Car,
  Shirt,
  Star,
  Bell,
  Edit,
  Trash2,
} from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Input } from "../components/ui/input"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("rentals")

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    image: "https://placehold.co/200x200",
    joined: "January 2023",
    paymentMethods: [
      {
        id: "card-1",
        type: "Visa",
        last4: "4242",
        expiry: "04/25",
      },
    ],
    rentals: [
      {
        id: "rental-1",
        title: "Modern Downtown Apartment",
        type: "property",
        location: "New York, NY",
        startDate: "2023-06-15",
        endDate: "2023-06-20",
        status: "upcoming",
        image: "https://placehold.co/600x400",
      },
      {
        id: "rental-2",
        title: "Tesla Model 3",
        type: "car",
        location: "Los Angeles, CA",
        startDate: "2023-05-10",
        endDate: "2023-05-12",
        status: "completed",
        image: "https://placehold.co/600x400",
      },
      {
        id: "rental-3",
        title: "Designer Evening Gown",
        type: "clothing",
        location: "Online",
        startDate: "2023-04-20",
        endDate: "2023-04-22",
        status: "completed",
        image: "https://placehold.co/600x400",
      },
    ],
    favorites: [
      {
        id: "property-2",
        title: "Beachfront Villa with Pool",
        type: "property",
        location: "Miami, FL",
        price: 350,
        rating: 4.9,
        image: "https://placehold.co/600x400",
      },
      {
        id: "car-2",
        title: "BMW 5 Series",
        type: "car",
        location: "New York, NY",
        price: 120,
        rating: 4.8,
        image: "https://placehold.co/600x400",
      },
    ],
    notifications: [
      {
        id: "notif-1",
        message: "Your booking for Modern Downtown Apartment has been confirmed.",
        date: "2023-06-01",
        read: false,
      },
      {
        id: "notif-2",
        message: "Your rental of Tesla Model 3 is coming up in 3 days.",
        date: "2023-05-07",
        read: true,
      },
      {
        id: "notif-3",
        message: "Please leave a review for your recent clothing rental.",
        date: "2023-04-23",
        read: true,
      },
    ],
  }

  const renderItemTypeIcon = (type) => {
    switch (type) {
      case "property":
        return <Building className="h-5 w-5" />
      case "car":
        return <Car className="h-5 w-5" />
      case "clothing":
        return <Shirt className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <div className="sticky top-24 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={user.image || "/placeholder.svg"}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">Member since {user.joined}</p>
              </div>
            </div>

            <nav className="space-y-1">
              <Button
                variant={activeTab === "rentals" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("rentals")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                My Rentals
              </Button>
              <Button
                variant={activeTab === "favorites" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("favorites")}
              >
                <Heart className="mr-2 h-4 w-4" />
                Favorites
              </Button>
              <Button
                variant={activeTab === "payment" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("payment")}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Payment Methods
              </Button>
              <Button
                variant={activeTab === "notifications" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("notifications")}
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
                {user.notifications.filter((n) => !n.read).length > 0 && (
                  <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {user.notifications.filter((n) => !n.read).length}
                  </span>
                )}
              </Button>
              <Button
                variant={activeTab === "account" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("account")}
              >
                <User className="mr-2 h-4 w-4" />
                Account Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* My Rentals Tab */}
          {activeTab === "rentals" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">My Rentals</h1>
                <Tabs defaultValue="upcoming">
                  <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <TabsContent value="upcoming" className="mt-0">
                <div className="space-y-4">
                  {user.rentals
                    .filter((rental) => rental.status === "upcoming")
                    .map((rental) => (
                      <Card key={rental.id}>
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4">
                              <img
                                src={rental.image || "/placeholder.svg"}
                                alt={rental.title}
                                className="w-full h-48 md:h-full object-cover"
                              />
                            </div>
                            <div className="p-6 flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                {renderItemTypeIcon(rental.type)}
                                <span className="text-sm font-medium text-muted-foreground capitalize">
                                  {rental.type}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold">{rental.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1 mb-4">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{rental.location}</span>
                              </div>

                              <div className="flex items-center gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Check-in</p>
                                  <p className="font-medium">
                                    {new Date(rental.startDate).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    })}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Check-out</p>
                                  <p className="font-medium">
                                    {new Date(rental.endDate).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    })}
                                  </p>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                <Button variant="outline" size="sm" asChild>
                                  <Link to={`/details/${rental.type}s/${rental.id}`}>View Details</Link>
                                </Button>
                                <Button variant="outline" size="sm">
                                  Contact Host
                                </Button>
                                <Button variant="destructive" size="sm">
                                  Cancel Booking
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                  {user.rentals.filter((rental) => rental.status === "upcoming").length === 0 && (
                    <div className="text-center py-12">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">No upcoming rentals</h3>
                      <p className="text-muted-foreground mb-6">You don't have any upcoming rentals scheduled.</p>
                      <Button asChild>
                        <Link to="/">Browse Rentals</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-0">
                <div className="space-y-4">
                  {user.rentals
                    .filter((rental) => rental.status === "completed")
                    .map((rental) => (
                      <Card key={rental.id}>
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4">
                              <img
                                src={rental.image || "/placeholder.svg"}
                                alt={rental.title}
                                className="w-full h-48 md:h-full object-cover"
                              />
                            </div>
                            <div className="p-6 flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                {renderItemTypeIcon(rental.type)}
                                <span className="text-sm font-medium text-muted-foreground capitalize">
                                  {rental.type}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold">{rental.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mt-1 mb-4">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{rental.location}</span>
                              </div>

                              <div className="flex items-center gap-4 mb-4">
                                <div>
                                  <p className="text-sm text-muted-foreground">Check-in</p>
                                  <p className="font-medium">
                                    {new Date(rental.startDate).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    })}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Check-out</p>
                                  <p className="font-medium">
                                    {new Date(rental.endDate).toLocaleDateString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    })}
                                  </p>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                <Button variant="outline" size="sm">
                                  View Receipt
                                </Button>
                                <Button variant="default" size="sm">
                                  Leave a Review
                                </Button>
                                <Button variant="outline" size="sm">
                                  Book Again
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === "favorites" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Favorites</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.favorites.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500"
                      >
                        <Heart className="h-5 w-5 fill-red-500" />
                        <span className="sr-only">Remove from favorites</span>
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        {renderItemTypeIcon(item.type)}
                        <span className="text-sm font-medium text-muted-foreground capitalize">{item.type}</span>
                      </div>
                      <h3 className="font-bold">{item.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div>
                          <span className="font-bold">${item.price}</span>
                          <span className="text-sm text-muted-foreground">
                            {item.type === "property" ? " / night" : " / day"}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                          <span className="font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4" asChild>
                        <Link to={`/details/${item.type}s/${item.id}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                {user.favorites.length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
                    <p className="text-muted-foreground mb-6">
                      Save your favorite properties, cars, and clothing items here.
                    </p>
                    <Button asChild>
                      <Link to="/">Browse Rentals</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Payment Methods Tab */}
          {activeTab === "payment" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Payment Methods</h1>

              <div className="space-y-6">
                {user.paymentMethods.map((method) => (
                  <Card key={method.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                            {method.type}
                          </div>
                          <div>
                            <p className="font-medium">
                              {method.type} •••• {method.last4}
                            </p>
                            <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Notifications</h1>

              <div className="space-y-4">
                {user.notifications.map((notification) => (
                  <Card key={notification.id} className={notification.read ? "" : "border-primary"}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-2 h-2 mt-2 rounded-full ${notification.read ? "bg-muted" : "bg-primary"}`} />
                        <div className="flex-1">
                          <p className={notification.read ? "" : "font-medium"}>{notification.message}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {new Date(notification.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        {!notification.read && (
                          <Button variant="ghost" size="sm">
                            Mark as read
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {user.notifications.length === 0 && (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No notifications</h3>
                    <p className="text-muted-foreground">You're all caught up!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Account Settings Tab */}
          {activeTab === "account" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                          First Name
                        </label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                          Last Name
                        </label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <Input id="phone" defaultValue={user.phone} />
                    </div>

                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4">Password</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="current-password" className="block text-sm font-medium mb-1">
                        Current Password
                      </label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div>
                      <label htmlFor="new-password" className="block text-sm font-medium mb-1">
                        New Password
                      </label>
                      <Input id="new-password" type="password" />
                    </div>

                    <div>
                      <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">
                        Confirm New Password
                      </label>
                      <Input id="confirm-password" type="password" />
                    </div>

                    <Button>Update Password</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4">Notification Preferences</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive booking confirmations and updates</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="email-notifications"
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                          defaultChecked
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive text messages for important updates</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="sms-notifications"
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                          defaultChecked
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketing Communications</p>
                        <p className="text-sm text-muted-foreground">Receive promotional offers and newsletters</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="marketing-communications"
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </div>
                    </div>

                    <Button>Save Preferences</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
