"use client"

import { useState, useRef, useContext } from "react"
import { Link } from "react-router-dom"
import { Upload, X, Plus, Info, MapPin, DollarSign, Calendar, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Select } from "@radix-ui/react-select"
import axios from "axios";
import { UserContext } from "../hooks/Context"
export default function CarUpload() {
  const [images, setImages] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const fileInputRef = useRef(null)
const {User}=useContext(UserContext)
    const [form, setForm] = useState({
    itemName: "",
    pricePerDay: "",
    owner_id:User.id,
        brand: "",
    location: "",
    model: "",
    year: "",
    type: "",
    transmissiontype: "automatic",
    features: [],
  })

  const carFeatures = [
    "Bluetooth", "Navigation", "Backup Camera", "Sunroof", "Heated Seats",
    "Apple CarPlay", "Android Auto", "Cruise Control", "Child Seat", "Bike Rack"
  ]

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const finalValue = type === "checkbox" ? checked : value
    setForm((prev) => ({ ...prev, [name]: finalValue }))
  }

  const toggleFeature = (feature) => {
    setForm((prev) => {
      if (prev.features.includes(feature)) {
        return { ...prev, features: prev.features.filter((f) => f !== feature) }
      } else {
        return { ...prev, features: [...prev.features, feature] }
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (images.length === 0) {
        alert("Please upload at least one image.")
        setIsSubmitting(false)
        return
      }

      const file = images[0].file // Only first image used

      const formData = new FormData()
      formData.append("file", file)
      formData.append("car", JSON.stringify({
        ...form,
        pricePerDay: parseFloat(form.pricePerDay),
        year: parseInt(form.year),
      }))

      await axios.post("http://localhost:1234/upload-car", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      setIsSuccess(true)
      setImages([])
      setForm({
        itemName: "", pricePerDay: "",
        brand: "", location: "", model: "", year: "", type: "",
        transmissiontype: "automatic", features: [],
      })
    } catch (error) {
      console.error("Submission failed", error)
      alert("Failed to upload car. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }
  if (isSuccess) {
    return (
      <div className="container py-12 md:py-24 max-w-3xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Listing Created Successfully!</h1>
          <p className="text-muted-foreground">Your car has been listed and is now available for rent.</p>
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
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Image Upload Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Upload Images</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Add high-quality photos to showcase your car. You can upload up to 10 images.
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

          {/* Car Details */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Car Details</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="car-title" className="block text-sm font-medium mb-1">
                    Car Title*
                  </label>
                  <Input
                    id="itemname"
                    name="itemName"
                    placeholder="e.g., Tesla Model 3 - All Electric"
                    value={form.itemName} onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="car-description" className="block text-sm font-medium mb-1">
                    Type*
                  </label>
                 <select id="type"                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

                    name="type"  value={form.type} onChange={handleChange} required
                  >
 <option value="Sedan">Sedan</option>
                    <option value="SUV">Suv</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="Convertible">Convertible</option>
                    <option value="Coupe">Coupe</option>
                 </select>
                </div>




                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium mb-1">
                     Location*
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="location"
                        name="location"
                        className="pl-9"
                        placeholder="City, State, Country"
                        value={form.location}
                        onChange={handleChange}
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
                        id="pricePerDay"
                        name="pricePerDay"
                        type="number"
                        className="pl-9"
                        placeholder="Price per Day"
                        min="0"
                        step="0.01"
                        value={form.pricePerDay}
                                                onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                


                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium mb-1">
                      Brand*
                    </label>
                    <Input
                      id="brand"
                     
                      placeholder="e.g., Toyota"
                      name="brand"  value={form.brand} onChange={handleChange} required
                    />
                  </div>

                 

                  <div>
                    <label htmlFor="car-model" className="block text-sm font-medium mb-1">
                      Model*
                    </label>
                    <Input
                      id="model"
                    
                      placeholder="e.g., Camry"
                      name="model"  value={form.model} onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="car-year" className="block text-sm font-medium mb-1">
                      Year*
                    </label>
                    <Input
                      id="year"
                     
                  
                      name="year" type="number"  value={form.year} onChange={handleChange}
                      required
                      placeholder="e.g., 2023"
                      min="1900"
                      max={new Date().getFullYear()}
            
                    />
                  </div>
                </div>


                <div>
                  <label htmlFor="car-transmission" className="block text-sm font-medium mb-1">
                    Transmission*
                  </label>
                  <select
                    id="transmissiontype"
                    name="transmissiontype"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={form.transmissiontype}
                    onChange={handleChange}
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
                          ${form.features.includes(feature) ? "bg-primary/10 border-primary" : "hover:bg-muted"}
                        `}
                        onClick={() => toggleFeature(feature)}
                      >
                        <input
                          type="checkbox"
                          checked={form.features.includes(feature)}
                          onChange={() => {}}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                



                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 

                  
                </div>
              </div>
            </CardContent>
          </Card>
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
                    <h3 className="font-bold truncate">{form.itemName || "Car Name"}</h3>

                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{form.location || " Location"}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">${form.pricePerDay || "0"}</span>
                      <span className="text-sm text-muted-foreground"> / day</span>
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
                          form.itemName ? "text-green-500" : "text-muted-foreground"
                        }`}
                      />
                      <span className={form.itemName && form.brand ? "" : "text-muted-foreground"}>
                        Complete required fields
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-4 w-4 mt-0.5 ${form.pricePerDay ? "text-green-500" : "text-muted-foreground"}`}
                      />
                      <span className={form.pricePerDay ? "" : "text-muted-foreground"}>Set a price</span>
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
                !form.itemName ||
                !form.brand ||
                !form.pricePerDay ||
                !form.location ||
                !form.year ||
                !form.model

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
  )
}

// "use client"

// import { useState, useRef } from "react"
// import { Link } from "react-router-dom"
// import axios from "axios"
// import { Upload, X, Plus, Info, CheckCircle } from "lucide-react"
// import { Button } from "../components/ui/button"
// import { Card, CardContent } from "../components/ui/card"
// import { Input } from "../components/ui/input"

// export default function CarUpload() {
//   const [images, setImages] = useState([])
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const fileInputRef = useRef(null)

//   const [form, setForm] = useState({
//     itemName: "",
//     category: "Car",
//     pricePerDay: "",
//     available: true,
//     brand: "",
//     location: "",
//     model: "",
//     year: "",
//     type: "",
//     transmissiontype: "automatic",
//     features: [],
//   })

//   const carFeatures = [
//     "Bluetooth", "Navigation", "Backup Camera", "Sunroof", "Heated Seats",
//     "Apple CarPlay", "Android Auto", "Cruise Control", "Child Seat", "Bike Rack"
//   ]

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files)
//     if (files.length > 0) {
//       const newImages = files.map((file) => ({
//         file,
//         preview: URL.createObjectURL(file),
//         name: file.name,
//       }))
//       setImages((prev) => [...prev, ...newImages])
//     }
//   }

//   const removeImage = (index) => {
//     setImages((prev) => {
//       const newImages = [...prev]
//       URL.revokeObjectURL(newImages[index].preview)
//       newImages.splice(index, 1)
//       return newImages
//     })
//   }

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     const finalValue = type === "checkbox" ? checked : value
//     setForm((prev) => ({ ...prev, [name]: finalValue }))
//   }

//   const toggleFeature = (feature) => {
//     setForm((prev) => {
//       if (prev.features.includes(feature)) {
//         return { ...prev, features: prev.features.filter((f) => f !== feature) }
//       } else {
//         return { ...prev, features: [...prev.features, feature] }
//       }
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       if (images.length === 0) {
//         alert("Please upload at least one image.")
//         setIsSubmitting(false)
//         return
//       }

//       const file = images[0].file // Only first image used

//       const formData = new FormData()
//       formData.append("file", file)
//       formData.append("car", JSON.stringify({
//         ...form,
//         pricePerDay: parseFloat(form.pricePerDay),
//         year: parseInt(form.year),
//       }))

//       await axios.post("http://localhost:1234/upload-car", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })

//       setIsSuccess(true)
//       setImages([])
//       setForm({
//         itemName: "", category: "Car", pricePerDay: "", available: true,
//         brand: "", location: "", model: "", year: "", type: "",
//         transmissiontype: "automatic", features: [],
//       })
//     } catch (error) {
//       console.error("Submission failed", error)
//       alert("Failed to upload car. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (isSuccess) {
//     return (
//       <div className="container py-12 max-w-3xl mx-auto text-center space-y-4">
//         <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
//           <CheckCircle className="h-8 w-8 text-primary" />
//         </div>
//         <h1 className="text-3xl font-bold">Listing Created Successfully!</h1>
//         <p className="text-muted-foreground">Your car is now listed for rent.</p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
//           <Button asChild><Link to="/dashboard">View Listings</Link></Button>
//           <Button variant="outline" onClick={() => setIsSuccess(false)}>Create Another</Button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       <div className="md:col-span-2 space-y-8">
//         {/* Image Upload */}
//         <Card>
//           <CardContent className="p-6">
//             <h2 className="text-xl font-bold mb-4">Upload Images</h2>
//             <p className="text-sm text-muted-foreground mb-4">Only first image will be used as cover.</p>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
//               {images.map((img, index) => (
//                 <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
//                   <img src={img.preview} alt="" className="w-full h-full object-cover" />
//                   <button type="button" className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1"
//                     onClick={() => removeImage(index)}>
//                     <X className="h-4 w-4" />
//                   </button>
//                 </div>
//               ))}
//               {images.length < 10 && (
//                 <button type="button" className="aspect-square rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
//                   onClick={() => fileInputRef.current?.click()}>
//                   <Plus className="h-8 w-8" />
//                   <span className="text-xs">Add Photo</span>
//                   <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//                 </button>
//               )}
//             </div>
//             <div className="flex items-start gap-2 text-sm text-muted-foreground">
//               <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
//               <p>Use high-resolution images (at least 1024x768).</p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Car Details */}
//         <Card>
//           <CardContent className="p-6 space-y-4">
//             <h2 className="text-xl font-bold mb-4">Car Details</h2>

//             <Input name="itemName" placeholder="Car Name*" value={form.itemName} onChange={handleChange} required />
//             <Input name="location" placeholder="Location*" value={form.location} onChange={handleChange} required />
//             <Input name="pricePerDay" type="number" placeholder="Price per Day*" value={form.pricePerDay} onChange={handleChange} required />
//             <Input name="brand" placeholder="Brand*" value={form.brand} onChange={handleChange} required />
//             <Input name="model" placeholder="Model*" value={form.model} onChange={handleChange} required />
//             <Input name="year" type="number" placeholder="Year*" value={form.year} onChange={handleChange} required />
//             <Input name="type" placeholder="Type (e.g. SUV, Sedan)*" value={form.type} onChange={handleChange} required />

//             <select name="transmissiontype" value={form.transmissiontype} onChange={handleChange} required className="w-full p-2 border rounded">
//               <option value="automatic">Automatic</option>
//               <option value="manual">Manual</option>
//               <option value="semi-automatic">Semi-Automatic</option>
//             </select>

//             <label className="font-semibold">Features</label>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {carFeatures.map((feature) => (
//                 <div key={feature} onClick={() => toggleFeature(feature)} className={`cursor-pointer border p-2 rounded ${form.features.includes(feature) ? "bg-primary/10 border-primary" : "hover:bg-muted"}`}>
//                   <input type="checkbox" checked={form.features.includes(feature)} readOnly className="mr-2" />
//                   {feature}
//                 </div>
//               ))}
//             </div>

//             <Button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? "Submitting..." : "Submit Listing"}
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </form>
//   )
// }
