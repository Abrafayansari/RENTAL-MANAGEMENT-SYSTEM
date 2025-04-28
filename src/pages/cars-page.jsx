"use client"
import { useState } from "react"
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select"
import {
  Card,
  CardContent,
} from "../components/ui/card"
import {
  Button,
} from "../components/ui/button"
import {
  Input,
} from "../components/ui/input"
import { DatePickerDemo } from "../components/ui/date-picker" 
export default function CarsPage() {
  const [filters, setFilters] = useState({
    location: "",
    carType: "all",
    priceRange: "all",
  })


  const cars = [
    {
      id: 1,
      title: "Tesla Model 3",
      location: "New York, NY",
      type: "Electric",
      price: 95,
      rating: 4.9,
      reviews: 42,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUa_LGCqP-G_QvODPwD8PTJxaD5uIqnSeeg&s",
    },
    {
      id: 2,
      title: "BMW 5 Series",
      location: "Los Angeles, CA",
      type: "Luxury",
      price: 120,
      rating: 4.8,
      reviews: 37,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUa_LGCqP-G_QvODPwD8PTJxaD5uIqnSeeg&s",
    },
  ]   

  return (
    <>
      
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl">Find Your Perfect Ride</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Browse our collection of premium vehicles available to rent for your next adventure
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/5 space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Search Cars</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="text-sm font-medium mb-1 block">
                      Pick-up Location
                    </label>
                    <Input
                      id="location"
                      placeholder="City, Airport, or Address"
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="pickup-date" className="text-sm font-medium mb-1 block">
                        Pick-up Date
                      </label>
                      <DatePickerDemo />
                    </div>
                    <div>
                      <label htmlFor="return-date" className="text-sm font-medium mb-1 block">
                        Return Date
                      </label>
                      <DatePickerDemo />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="car-type" className="text-sm font-medium mb-1 block">
                      Car Type
                    </label>
                    <Select
                      value={filters.carType}
                      onValueChange={(value) => setFilters({ ...filters, carType: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="price" className="text-sm font-medium mb-1 block">
                      Price Range
                    </label>
                    <Select
                      value={filters.priceRange}
                      onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Price</SelectItem>
                        <SelectItem value="0-50">$0 - $50 / day</SelectItem>
                        <SelectItem value="50-100">$50 - $100 / day</SelectItem>
                        <SelectItem value="100-150">$100 - $150 / day</SelectItem>
                        <SelectItem value="150+">$150+ / day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

              
                  <Button className="w-full">Search Cars</Button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Popular Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="automatic"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="automatic" className="ml-2 text-sm">
                      Automatic Transmission
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="bluetooth"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="bluetooth" className="ml-2 text-sm">
                      Bluetooth
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="navigation"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="navigation" className="ml-2 text-sm">
                      Navigation System
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="backup-camera"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="backup-camera" className="ml-2 text-sm">
                      Backup Camera
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="child-seat"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="child-seat" className="ml-2 text-sm">
                      Child Seat Compatible
                    </label>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold">6 cars available</h2>
                  <p className="text-sm text-muted-foreground">Based on your search</p>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-sm font-medium">
                    Sort by:
                  </label>
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map((car) => (
                  <Card key={car.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={car.image || "/placeholder.svg"}
                        alt={car.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="!p-4 ">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{car.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{car.location}</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-bold">${car.price}</span>
                          <span className="text-sm text-muted-foreground"> /day</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                          {car.type}
                        </span>
                        <div className="ml-auto flex items-center">
                          <svg className="h-4 w-4 fill-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm font-medium">{car.rating}</span>
                          <span className="ml-1 text-xs text-muted-foreground">({car.reviews} reviews)</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">Book Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ArrowLeft className="h-4 w-4" />
                    <span className="sr-only">Previous page</span>
                  </Button>
                  {[...Array(3)].map((_, i) => (
                    <Button key={i} variant="outline" size="sm" className="h-8 w-8">
                      {i + 1}
                    </Button>
                  ))}
                  <Button variant="outline" size="icon">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">Next page</span>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}