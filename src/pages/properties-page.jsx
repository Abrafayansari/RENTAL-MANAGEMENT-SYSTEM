"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    location: "",
    type: "all",
    priceRange: "all",
  })

  // Mock data for properties
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "New York, NY",
      type: "Apartment",
      price: 150,
      rating: 4.8,
      reviews: 24,
      image: "https://placehold.co/600x400",
    },
    {
      id: 2,
      title: "Beachfront Villa with Pool",
      location: "Miami, FL",
      type: "Villa",
      price: 350,
      rating: 4.9,
      reviews: 37,
      image: "https://placehold.co/600x400",
    },
    {
      id: 3,
      title: "Cozy Mountain Cabin",
      location: "Aspen, CO",
      type: "Cabin",
      price: 180,
      rating: 4.7,
      reviews: 19,
      image: "https://placehold.co/600x400",
    },
    {
      id: 4,
      title: "Luxury Penthouse Suite",
      location: "Los Angeles, CA",
      type: "Apartment",
      price: 300,
      rating: 4.9,
      reviews: 42,
      image: "https://placehold.co/600x400",
    },
    {
      id: 5,
      title: "Charming Country House",
      location: "Nashville, TN",
      type: "House",
      price: 220,
      rating: 4.6,
      reviews: 31,
      image: "https://placehold.co/600x400",
    },
    {
      id: 6,
      title: "Lakeside Cottage",
      location: "Lake Tahoe, CA",
      type: "Cottage",
      price: 190,
      rating: 4.8,
      reviews: 27,
      image: "https://placehold.co/600x400",
    },
  ]

  return (
    <>
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Find Your Perfect Property</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Browse our collection of premium properties available to rent for your next stay
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Section */}
            <div className="w-full md:w-1/5 space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Search Properties</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="location" className="text-sm font-medium mb-1 block">
                      Location
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="location"
                        placeholder="City, State, or Zip"
                        value={filters.location}
                        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="type" className="text-sm font-medium mb-1 block">
                      Property Type
                    </label>
                    <Select
                      id="type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={filters.type}
                      onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="cabin">Cabin</SelectItem>
                      <SelectItem value="cottage">Cottage</SelectItem>
                    </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="price" className="text-sm font-medium mb-1 block">
                      Price Range
                    </label>
                    <Select
                      id="price"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={filters.priceRange}
                      onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Any Price" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Price</SelectItem>
                        <SelectItem value="0-100">$0 - $100 / night</SelectItem>
                        <SelectItem value="100-200">$100 - $200 / night</SelectItem>
                        <SelectItem value="200-300">$200 - $300 / night</SelectItem>
                        <SelectItem value="300+">$300+ / night</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium text-lg mb-4">Popular Filters</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pool"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="pool" className="ml-2 text-sm">
                      Pool
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="wifi"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="wifi" className="ml-2 text-sm">
                      Free WiFi
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="parking"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="parking" className="ml-2 text-sm">
                      Free Parking
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pets"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="pets" className="ml-2 text-sm">
                      Pet Friendly
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="ac"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="ac" className="ml-2 text-sm">
                      Air Conditioning
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Listings */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold">6 properties available</h2>
                  <p className="text-sm text-muted-foreground">Based on your filters</p>
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
                {properties.map((property) => (
                  <Card key={property.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="!p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{property.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{property.location}</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-bold">${property.price}</span>
                          <span className="text-sm text-muted-foreground"> /night</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                          {property.type}
                        </span>
                        <div className="ml-auto flex items-center">
                          <svg className="h-4 w-4 fill-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm font-medium">{property.rating}</span>
                          <span className="ml-1 text-xs text-muted-foreground">({property.reviews} reviews)</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">View Details</Button>
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
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8">
                    3
                  </Button>
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
