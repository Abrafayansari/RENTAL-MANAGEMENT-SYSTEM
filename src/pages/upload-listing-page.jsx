"use client"

import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Building, Car, Shirt, Upload, X, Plus, Info, MapPin, DollarSign, Calendar, CheckCircle } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"

export default function UploadListingPage() {
  const [activeCategory, setActiveCategory] = useState("property")
  const [images, setImages] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const fileInputRef = useRef(null)

  // Form states for each category
  const [propertyForm, setPropertyForm] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    availableFrom: "",
    availableTo: "",
  })

  const [carForm, setCarForm] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    make: "",
    model: "",
    year: "",
    transmission: "automatic",
    features: [],
    availableFrom: "",
    availableTo: "",
  })

  const [clothingForm, setClothingForm] = useState({
    title: "",
    description: "",
    designer: "",
    price: "",
    category: "",
    sizes: [],
    condition: "new",
    availableFrom: "",
    availableTo: "",
  })

  // Common amenities/features for properties
  const propertyAmenities = [
    "WiFi",
    "Air Conditioning",
    "Kitchen",
    "Washer",
    "Dryer",
    "Free Parking",
    "Pool",
    "Hot Tub",
    "TV",
    "Gym",
  ]

  // Common features for cars
  const carFeatures = [
    "Bluetooth",
    "Navigation",
    "Backup Camera",
    "Sunroof",
    "Heated Seats",
    "Apple CarPlay",
    "Android Auto",
    "Cruise Control",
    "Child Seat",
    "Bike Rack",
  ]

  // Common clothing sizes
  const clothingSizes = ["XS", "S", "M", "L", "XL", "XXL"]

  // Common clothing categories
  const clothingCategories = ["Formal", "Casual", "Costume", "Accessories", "Shoes"]

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)

    if (files.length > 0) {
      const newImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name,
      }))

      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index) => {
    setImages((prev) => {
      const newImages = [...prev]
      URL.revokeObjectURL(newImages[index].preview)
      newImages.splice(index, 1)
      return newImages
    })
  }

  const handlePropertyChange = (e) => {
    const { name, value } = e.target
    setPropertyForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCarChange = (e) => {
    const { name, value } = e.target
    setCarForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleClothingChange = (e) => {
    const { name, value } = e.target
    setClothingForm((prev) => ({ ...prev, [name]: value }))
  }

  const togglePropertyAmenity = (amenity) => {
    setPropertyForm((prev) => {
      if (prev.amenities.includes(amenity)) {
        return { ...prev, amenities: prev.amenities.filter((a) => a !== amenity) }
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] }
      }
    })
  }

  const toggleCarFeature = (feature) => {
    setCarForm((prev) => {
      if (prev.features.includes(feature)) {
        return { ...prev, features: prev.features.filter((f) => f !== feature) }
      } else {
        return { ...prev, features: [...prev.features, feature] }
      }
    })
  }

  const toggleClothingSize = (size) => {
    setClothingForm((prev) => {
      if (prev.sizes.includes(size)) {
        return { ...prev, sizes: prev.sizes.filter((s) => s !== size) }
      } else {
        return { ...prev, sizes: [...prev.sizes, size] }
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setImages([])

        if (activeCategory === "property") {
          setPropertyForm({
            title: "",
            description: "",
            location: "",
            price: "",
            bedrooms: "",
            bathrooms: "",
            amenities: [],
            availableFrom: "",
            availableTo: "",
          })
        } else if (activeCategory === "car") {
          setCarForm({
            title: "",
            description: "",
            location: "",
            price: "",
            make: "",
            model: "",
            year: "",
            transmission: "automatic",
            features: [],
            availableFrom: "",
            availableTo: "",
          })
        } else {
          setClothingForm({
            title: "",
            description: "",
            designer: "",
            price: "",
            category: "",
            sizes: [],
            condition: "new",
            availableFrom: "",
            availableTo: "",
          })
        }
      }, 3000)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="container py-12 md:py-24 max-w-3xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Listing Created Successfully!</h1>
          <p className="text-muted-foreground">Your {activeCategory} has been listed and is now available for rent.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button asChild>
              <Link to="/dashboard">View Your Listings</Link>
            </Button>
            <Button variant="outline" onClick={() => setIsSuccess(false)}>
              Create Another Listing
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">List Your Rental Item</h1>
          <p className="text-muted-foreground mt-2">
            Share your property, car, or clothing items with thousands of potential renters
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-2">What would you like to rent out?</h2>
          <p className="text-muted-foreground mb-4">Select the category that best matches your rental item</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              className={`cursor-pointer transition-all ${activeCategory === "property" ? "ring-2 ring-primary" : ""}`}
              onClick={() => setActiveCategory("property")}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Building
                  className={`h-12 w-12 mb-4 ${activeCategory === "property" ? "text-primary" : "text-muted-foreground"}`}
                />
                <h3 className="font-bold text-lg">Property</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Apartments, houses, villas, cabins, and other accommodations
                </p>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${activeCategory === "car" ? "ring-2 ring-primary" : ""}`}
              onClick={() => setActiveCategory("car")}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Car
                  className={`h-12 w-12 mb-4 ${activeCategory === "car" ? "text-primary" : "text-muted-foreground"}`}
                />
                <h3 className="font-bold text-lg">Car</h3>
                <p className="text-sm text-muted-foreground mt-2">Luxury, SUVs, economy, vans, and other vehicles</p>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${activeCategory === "clothing" ? "ring-2 ring-primary" : ""}`}
              onClick={() => setActiveCategory("clothing")}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shirt
                  className={`h-12 w-12 mb-4 ${activeCategory === "clothing" ? "text-primary" : "text-muted-foreground"}`}
                />
                <h3 className="font-bold text-lg">Clothing</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Formal wear, casual outfits, costumes, and accessories
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Image Upload Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Upload Images</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add high-quality photos to showcase your rental item. You can upload up to 10 images.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
                        <img
                          src={image.preview || "/placeholder.svg"}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}

                    {images.length < 10 && (
                      <button
                        type="button"
                        className="aspect-square rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Plus className="h-8 w-8" />
                        <span className="text-xs">Add Photo</span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </button>
                    )}
                  </div>

                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p>
                      For best results, use high-resolution images (at least 1024x768 pixels). First image will be used
                      as the cover photo.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Category-specific forms */}
              {activeCategory === "property" && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Property Details</h2>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="property-title" className="block text-sm font-medium mb-1">
                          Property Title*
                        </label>
                        <Input
                          id="property-title"
                          name="title"
                          placeholder="e.g., Modern Downtown Apartment"
                          value={propertyForm.title}
                          onChange={handlePropertyChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="property-description" className="block text-sm font-medium mb-1">
                          Description*
                        </label>
                        <textarea
                          id="property-description"
                          name="description"
                          rows={5}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Describe your property, including special features, nearby attractions, etc."
                          value={propertyForm.description}
                          onChange={handlePropertyChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="property-location" className="block text-sm font-medium mb-1">
                            Location*
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="property-location"
                              name="location"
                              className="pl-9"
                              placeholder="City, State, Country"
                              value={propertyForm.location}
                              onChange={handlePropertyChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="property-price" className="block text-sm font-medium mb-1">
                            Price per Night*
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="property-price"
                              name="price"
                              type="number"
                              className="pl-9"
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                              value={propertyForm.price}
                              onChange={handlePropertyChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="property-bedrooms" className="block text-sm font-medium mb-1">
                            Bedrooms*
                          </label>
                          <Input
                            id="property-bedrooms"
                            name="bedrooms"
                            type="number"
                            min="0"
                            placeholder="Number of bedrooms"
                            value={propertyForm.bedrooms}
                            onChange={handlePropertyChange}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="property-bathrooms" className="block text-sm font-medium mb-1">
                            Bathrooms*
                          </label>
                          <Input
                            id="property-bathrooms"
                            name="bathrooms"
                            type="number"
                            min="0"
                            step="0.5"
                            placeholder="Number of bathrooms"
                            value={propertyForm.bathrooms}
                            onChange={handlePropertyChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Amenities</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {propertyAmenities.map((amenity) => (
                            <div
                              key={amenity}
                              className={`
                                flex items-center gap-2 p-2 rounded-md cursor-pointer border
                                ${
                                  propertyForm.amenities.includes(amenity)
                                    ? "bg-primary/10 border-primary"
                                    : "hover:bg-muted"
                                }
                              `}
                              onClick={() => togglePropertyAmenity(amenity)}
                            >
                              <input
                                type="checkbox"
                                checked={propertyForm.amenities.includes(amenity)}
                                onChange={() => {}}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="property-available-from" className="block text-sm font-medium mb-1">
                            Available From*
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="property-available-from"
                              name="availableFrom"
                              type="date"
                              className="pl-9"
                              value={propertyForm.availableFrom}
                              onChange={handlePropertyChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="property-available-to" className="block text-sm font-medium mb-1">
                            Available To
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="property-available-to"
                              name="availableTo"
                              type="date"
                              className="pl-9"
                              value={propertyForm.availableTo}
                              onChange={handlePropertyChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeCategory === "car" && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Car Details</h2>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="car-title" className="block text-sm font-medium mb-1">
                          Listing Title*
                        </label>
                        <Input
                          id="car-title"
                          name="title"
                          placeholder="e.g., Tesla Model 3 - All Electric"
                          value={carForm.title}
                          onChange={handleCarChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="car-description" className="block text-sm font-medium mb-1">
                          Description*
                        </label>
                        <textarea
                          id="car-description"
                          name="description"
                          rows={5}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Describe your car, including condition, special features, etc."
                          value={carForm.description}
                          onChange={handleCarChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="car-location" className="block text-sm font-medium mb-1">
                            Pickup Location*
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="car-location"
                              name="location"
                              className="pl-9"
                              placeholder="City, State, Country"
                              value={carForm.location}
                              onChange={handleCarChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="car-price" className="block text-sm font-medium mb-1">
                            Price per Day*
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="car-price"
                              name="price"
                              type="number"
                              className="pl-9"
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                              value={carForm.price}
                              onChange={handleCarChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label htmlFor="car-make" className="block text-sm font-medium mb-1">
                            Make*
                          </label>
                          <Input
                            id="car-make"
                            name="make"
                            placeholder="e.g., Toyota"
                            value={carForm.make}
                            onChange={handleCarChange}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="car-model" className="block text-sm font-medium mb-1">
                            Model*
                          </label>
                          <Input
                            id="car-model"
                            name="model"
                            placeholder="e.g., Camry"
                            value={carForm.model}
                            onChange={handleCarChange}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="car-year" className="block text-sm font-medium mb-1">
                            Year*
                          </label>
                          <Input
                            id="car-year"
                            name="year"
                            type="number"
                            placeholder="e.g., 2023"
                            min="1900"
                            max={new Date().getFullYear()}
                            value={carForm.year}
                            onChange={handleCarChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="car-transmission" className="block text-sm font-medium mb-1">
                          Transmission*
                        </label>
                        <select
                          id="car-transmission"
                          name="transmission"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={carForm.transmission}
                          onChange={handleCarChange}
                          required
                        >
                          <option value="automatic">Automatic</option>
                          <option value="manual">Manual</option>
                          <option value="semi-automatic">Semi-Automatic</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Features</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {carFeatures.map((feature) => (
                            <div
                              key={feature}
                              className={`
                                flex items-center gap-2 p-2 rounded-md cursor-pointer border
                                ${
                                  carForm.features.includes(feature) ? "bg-primary/10 border-primary" : "hover:bg-muted"
                                }
                              `}
                              onClick={() => toggleCarFeature(feature)}
                            >
                              <input
                                type="checkbox"
                                checked={carForm.features.includes(feature)}
                                onChange={() => {}}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                              />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="car-available-from" className="block text-sm font-medium mb-1">
                            Available From*
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="car-available-from"
                              name="availableFrom"
                              type="date"
                              className="pl-9"
                              value={carForm.availableFrom}
                              onChange={handleCarChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="car-available-to" className="block text-sm font-medium mb-1">
                            Available To
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="car-available-to"
                              name="availableTo"
                              type="date"
                              className="pl-9"
                              value={carForm.availableTo}
                              onChange={handleCarChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeCategory === "clothing" && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Clothing Details</h2>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="clothing-title" className="block text-sm font-medium mb-1">
                          Item Title*
                        </label>
                        <Input
                          id="clothing-title"
                          name="title"
                          placeholder="e.g., Designer Evening Gown"
                          value={clothingForm.title}
                          onChange={handleClothingChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="clothing-description" className="block text-sm font-medium mb-1">
                          Description*
                        </label>
                        <textarea
                          id="clothing-description"
                          name="description"
                          rows={5}
                          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Describe your clothing item, including material, fit, occasions it's suitable for, etc."
                          value={clothingForm.description}
                          onChange={handleClothingChange}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="clothing-designer" className="block text-sm font-medium mb-1">
                            Designer/Brand*
                          </label>
                          <Input
                            id="clothing-designer"
                            name="designer"
                            placeholder="e.g., Vera Wang"
                            value={clothingForm.designer}
                            onChange={handleClothingChange}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="clothing-price" className="block text-sm font-medium mb-1">
                            Price per Day*
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="clothing-price"
                              name="price"
                              type="number"
                              className="pl-9"
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                              value={clothingForm.price}
                              onChange={handleClothingChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="clothing-category" className="block text-sm font-medium mb-1">
                          Category*
                        </label>
                        <select
                          id="clothing-category"
                          name="category"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={clothingForm.category}
                          onChange={handleClothingChange}
                          required
                        >
                          <option value="">Select a category</option>
                          {clothingCategories.map((category) => (
                            <option key={category} value={category.toLowerCase()}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Available Sizes*</label>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                          {clothingSizes.map((size) => (
                            <div
                              key={size}
                              className={`
                                flex items-center justify-center p-2 rounded-md cursor-pointer border
                                ${clothingForm.sizes.includes(size) ? "bg-primary/10 border-primary" : "hover:bg-muted"}
                              `}
                              onClick={() => toggleClothingSize(size)}
                            >
                              <span>{size}</span>
                            </div>
                          ))}
                        </div>
                        {clothingForm.sizes.length === 0 && (
                          <p className="text-xs text-red-500 mt-1">Please select at least one size</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="clothing-condition" className="block text-sm font-medium mb-1">
                          Condition*
                        </label>
                        <select
                          id="clothing-condition"
                          name="condition"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={clothingForm.condition}
                          onChange={handleClothingChange}
                          required
                        >
                          <option value="new">New with tags</option>
                          <option value="like-new">Like new</option>
                          <option value="excellent">Excellent</option>
                          <option value="good">Good</option>
                          <option value="fair">Fair</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="clothing-available-from" className="block text-sm font-medium mb-1">
                            Available From*
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="clothing-available-from"
                              name="availableFrom"
                              type="date"
                              className="pl-9"
                              value={clothingForm.availableFrom}
                              onChange={handleClothingChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="clothing-available-to" className="block text-sm font-medium mb-1">
                            Available To
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="clothing-available-to"
                              name="availableTo"
                              type="date"
                              className="pl-9"
                              value={clothingForm.availableTo}
                              onChange={handleClothingChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Preview and Submit Section */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Listing Preview</h2>

                    <div className="space-y-4">
                      {images.length > 0 ? (
                        <div className="aspect-video rounded-md overflow-hidden">
                          <img
                            src={images[0].preview || "/placeholder.svg"}
                            alt="Cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
                          <Upload className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}

                      <div>
                        <h3 className="font-bold truncate">
                          {activeCategory === "property" && (propertyForm.title || "Property Title")}
                          {activeCategory === "car" && (carForm.title || "Car Title")}
                          {activeCategory === "clothing" && (clothingForm.title || "Clothing Item Title")}
                        </h3>

                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>
                            {activeCategory === "property" && (propertyForm.location || "Location")}
                            {activeCategory === "car" && (carForm.location || "Pickup Location")}
                            {activeCategory === "clothing" && "Online"}
                          </span>
                        </div>

                        <div className="mt-2">
                          <span className="font-bold">
                            ${activeCategory === "property" && (propertyForm.price || "0")}
                            {activeCategory === "car" && (carForm.price || "0")}
                            {activeCategory === "clothing" && (clothingForm.price || "0")}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {activeCategory === "property" ? " / night" : " / day"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-bold mb-2">Listing Requirements</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle
                            className={`h-4 w-4 mt-0.5 ${images.length > 0 ? "text-green-500" : "text-muted-foreground"}`}
                          />
                          <span className={images.length > 0 ? "" : "text-muted-foreground"}>
                            Upload at least one image
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle
                            className={`h-4 w-4 mt-0.5 ${
                              (activeCategory === "property" && propertyForm.title && propertyForm.description) ||
                              (activeCategory === "car" && carForm.title && carForm.description) ||
                              (activeCategory === "clothing" && clothingForm.title && clothingForm.description)
                                ? "text-green-500"
                                : "text-muted-foreground"
                            }`}
                          />
                          <span
                            className={
                              (activeCategory === "property" && propertyForm.title && propertyForm.description) ||
                              (activeCategory === "car" && carForm.title && carForm.description) ||
                              (activeCategory === "clothing" && clothingForm.title && clothingForm.description)
                                ? ""
                                : "text-muted-foreground"
                            }
                          >
                            Complete required fields
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle
                            className={`h-4 w-4 mt-0.5 ${
                              (activeCategory === "property" && propertyForm.price) ||
                              (activeCategory === "car" && carForm.price) ||
                              (activeCategory === "clothing" && clothingForm.price)
                                ? "text-green-500"
                                : "text-muted-foreground"
                            }`}
                          />
                          <span
                            className={
                              (activeCategory === "property" && propertyForm.price) ||
                              (activeCategory === "car" && carForm.price) ||
                              (activeCategory === "clothing" && clothingForm.price)
                                ? ""
                                : "text-muted-foreground"
                            }
                          >
                            Set a price
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                  disabled={
                    isSubmitting ||
                    images.length === 0 ||
                    (activeCategory === "property" &&
                      (!propertyForm.title ||
                        !propertyForm.description ||
                        !propertyForm.price ||
                        !propertyForm.location ||
                        !propertyForm.availableFrom)) ||
                    (activeCategory === "car" &&
                      (!carForm.title ||
                        !carForm.description ||
                        !carForm.price ||
                        !carForm.location ||
                        !carForm.availableFrom)) ||
                    (activeCategory === "clothing" &&
                      (!clothingForm.title ||
                        !clothingForm.description ||
                        !clothingForm.price ||
                        !clothingForm.designer ||
                        !clothingForm.category ||
                        clothingForm.sizes.length === 0 ||
                        !clothingForm.availableFrom))
                  }
                >
                  {isSubmitting ? "Creating Listing..." : "Create Listing"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By creating this listing, you agree to our{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Host Policies
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
