"use client"

import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { MapPin, Star, Check, Heart, Share2, ArrowLeft, Car, Building, Shirt } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"

// Mock data for different item types
const mockItems = {
  properties: [
    {
      id: "property-1",
      title: "Modern Downtown Apartment",
      location: "New York, NY",
      type: "Apartment",
      price: 150,
      rating: 4.8,
      reviews: 24,
      images: [
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
      ],
      description:
        "This beautiful modern apartment is located in the heart of downtown, offering stunning city views and easy access to restaurants, shopping, and entertainment. The space features high ceilings, large windows, and contemporary furnishings.",
      features: [
        "2 Bedrooms",
        "2 Bathrooms",
        "Fully equipped kitchen",
        "High-speed WiFi",
        "Smart TV",
        "Air conditioning",
        "Washer/dryer",
        "Gym access",
        "Parking space",
      ],
      host: {
        name: "Michael Johnson",
        joined: "January 2020",
        responseRate: "98%",
        image: "https://placehold.co/100x100",
      },
      availability: true,
    },
  ],
  cars: [
    {
      id: "car-1",
      title: "Tesla Model 3",
      location: "New York, NY",
      type: "Electric",
      price: 95,
      rating: 4.9,
      reviews: 42,
      images: [
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
      ],
      description:
        "Experience the future of driving with this Tesla Model 3. This all-electric vehicle offers impressive range, acceleration, and the latest technology features. Perfect for eco-conscious travelers or anyone wanting to experience electric driving.",
      features: [
        "All-electric vehicle",
        "Autopilot capabilities",
        '15" touchscreen display',
        "Dual motor AWD",
        "Panoramic glass roof",
        "Premium sound system",
        "Heated seats",
        "Supercharger access",
        "Free delivery within 10 miles",
      ],
      owner: {
        name: "Sarah Williams",
        joined: "March 2021",
        responseRate: "100%",
        image: "https://placehold.co/100x100",
      },
      availability: true,
      specs: {
        range: "315 miles",
        acceleration: "0-60 mph in 3.1s",
        topSpeed: "162 mph",
        seating: "5 adults",
      },
    },
  ],
  clothing: [
    {
      id: "clothing-1",
      title: "Designer Evening Gown",
      designer: "Vera Wang",
      category: "Formal",
      size: "S, M, L",
      price: 120,
      rating: 4.9,
      reviews: 32,
      images: [
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
        "https://placehold.co/1200x800",
      ],
      description:
        "Make a statement at your next formal event with this stunning Vera Wang evening gown. This elegant floor-length dress features intricate beadwork, a flattering silhouette, and premium materials that ensure comfort throughout your special occasion.",
      features: [
        "Premium silk fabric",
        "Hand-sewn beadwork",
        "Built-in support",
        "Floor length",
        "Dry clean only",
        "Includes garment bag",
        "Optional accessories available",
        "Professional steaming before delivery",
      ],
      provider: {
        name: "Luxury Closet Rentals",
        established: "2018",
        rating: "4.9",
        image: "https://placehold.co/100x100",
      },
      availability: true,
      details: {
        material: "100% Silk",
        care: "Dry clean only",
        fit: "True to size",
        occasion: "Formal events, galas, weddings",
      },
    },
  ],
}

export default function ItemDetailsPage() {
  const { itemType, itemId } = useParams()
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Find the item based on type and ID
  const items = mockItems[itemType] || []
  const item = items.find((i) => i.id === itemId) || items[0] // Fallback to first item if not found

  if (!item) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold">Item not found</h2>
        <p className="mt-4">The requested item could not be found.</p>
        <Button className="mt-6" asChild>
          <Link to={`/${itemType}`}>Back to {itemType}</Link>
        </Button>
      </div>
    )
  }

  const calculateTotal = () => {
    if (!startDate || !endDate) return item.price

    const start = new Date(startDate)
    const end = new Date(endDate)
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    return item.price * (days || 1)
  }

  const renderItemTypeIcon = () => {
    switch (itemType) {
      case "properties":
        return <Building className="h-5 w-5" />
      case "cars":
        return <Car className="h-5 w-5" />
      case "clothing":
        return <Shirt className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <>
      <div className="bg-gradient-to-b from-primary/10 to-transparent pt-8 pb-4">
        <div className="container">
          <Link
            to={`/${itemType}`}
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-4"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to {itemType}
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                {renderItemTypeIcon()}
                <span className="text-sm font-medium text-muted-foreground">{item.type || item.category}</span>
              </div>
              <h1 className="text-3xl font-bold mt-1">{item.title}</h1>
              <div className="flex items-center mt-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{item.location}</span>
                <div className="mx-2">•</div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                  <span>{item.rating}</span>
                  <span className="ml-1">({item.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className={isFavorite ? "text-red-500" : ""}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-2">
                <img
                  src={item.images[activeImageIndex] || "/placeholder.svg"}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {item.images.map((image, index) => (
                  <div
                    key={index}
                    className={`aspect-[4/3] overflow-hidden rounded-lg cursor-pointer ${activeImageIndex === index ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${item.title} ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Item Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About this {itemType.slice(0, -1)}</h2>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Item-specific details */}
              {itemType === "cars" && item.specs && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Range</p>
                      <p className="font-bold">{item.specs.range}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Acceleration</p>
                      <p className="font-bold">{item.specs.acceleration}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Top Speed</p>
                      <p className="font-bold">{item.specs.topSpeed}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <p className="text-sm text-muted-foreground">Seating</p>
                      <p className="font-bold">{item.specs.seating}</p>
                    </div>
                  </div>
                </div>
              )}

              {itemType === "clothing" && item.details && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Product Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Material</p>
                      <p className="font-bold">{item.details.material}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Care Instructions</p>
                      <p className="font-bold">{item.details.care}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Fit</p>
                      <p className="font-bold">{item.details.fit}</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Recommended For</p>
                      <p className="font-bold">{item.details.occasion}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Provider/Host/Owner Information */}
              <div>
                <h3 className="text-xl font-bold mb-4">
                  {itemType === "properties" ? "Hosted by" : itemType === "cars" ? "Owned by" : "Provided by"}
                </h3>
                <div className="flex items-center">
                  <img
                    src={item.host?.image || item.owner?.image || item.provider?.image}
                    alt="Provider"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-bold">{item.host?.name || item.owner?.name || item.provider?.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {itemType === "properties" && `Joined ${item.host?.joined}`}
                      {itemType === "cars" && `Joined ${item.owner?.joined}`}
                      {itemType === "clothing" && `Established ${item.provider?.established}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {itemType === "properties" && `Response rate: ${item.host?.responseRate}`}
                      {itemType === "cars" && `Response rate: ${item.owner?.responseRate}`}
                      {itemType === "clothing" && `Rating: ${item.provider?.rating}/5`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Reviews</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-secondary text-secondary mr-1" />
                    <span className="font-bold">{item.rating}</span>
                    <span className="text-muted-foreground ml-1">({item.reviews} reviews)</span>
                  </div>
                </div>

                {/* Sample reviews */}
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <img src="https://placehold.co/50x50" alt="Reviewer" className="w-10 h-10 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">John D.</p>
                        <p className="text-xs text-muted-foreground">April 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      {itemType === "properties" &&
                        "This apartment exceeded our expectations! The location was perfect, and the amenities were exactly as described. We especially loved the city views and how close it was to restaurants and shopping."}
                      {itemType === "cars" &&
                        "Fantastic car! Clean, well-maintained, and a joy to drive. The owner was very responsive and made the pickup and return process incredibly smooth."}
                      {itemType === "clothing" &&
                        "The dress was absolutely stunning and fit perfectly. I received so many compliments at the event. The quality was impeccable, and it arrived on time in perfect condition."}
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <img src="https://placehold.co/50x50" alt="Reviewer" className="w-10 h-10 rounded-full mr-3" />
                      <div>
                        <p className="font-medium">Emily R.</p>
                        <p className="text-xs text-muted-foreground">March 2023</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      {itemType === "properties" &&
                        "We had a wonderful stay! The apartment was clean, comfortable, and had everything we needed. The host was very responsive and provided great local recommendations."}
                      {itemType === "cars" &&
                        "This Tesla was amazing to drive! It was my first time driving an electric car, and I'm now convinced I need one. The car was spotless and fully charged when I picked it up."}
                      {itemType === "clothing" &&
                        "The gown was perfect for my event. The fit was true to size, and the quality was exceptional. The rental process was seamless from start to finish."}
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="mt-4 w-full">
                  View all {item.reviews} reviews
                </Button>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">${item.price}</span>
                    <span className="text-muted-foreground">
                      {itemType === "properties" && " / night"}
                      {itemType === "cars" && " / day"}
                      {itemType === "clothing" && " / day"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-secondary text-secondary mr-1" />
                    <span className="font-medium">{item.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({item.reviews})</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="start-date" className="block text-sm font-medium mb-1">
                      Start Date
                    </label>
                    <div className="flex">
                      <Input
                        id="start-date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="end-date" className="block text-sm font-medium mb-1">
                      End Date
                    </label>
                    <div className="flex">
                      <Input
                        id="end-date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  {itemType === "clothing" && (
                    <div>
                      <label htmlFor="size" className="block text-sm font-medium mb-1">
                        Size
                      </label>
                      <select
                        id="size"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select size</option>
                        {item.size.split(", ").map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                    Reserve
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">You won't be charged yet</p>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-between mb-2">
                    <span>
                      ${item.price} ×{" "}
                      {startDate && endDate
                        ? Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)) || 1
                        : 1}{" "}
                      {itemType === "properties" ? "nights" : "days"}
                    </span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Service fee</span>
                    <span>${Math.round(calculateTotal() * 0.1)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-4 border-t mt-4">
                    <span>Total</span>
                    <span>${calculateTotal() + Math.round(calculateTotal() * 0.1)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
