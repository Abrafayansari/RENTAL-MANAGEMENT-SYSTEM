// "use client"

// import { useState, useRef } from "react"
// import { Link } from "react-router-dom"
// import { Upload, X, Plus, Info, DollarSign, Calendar, CheckCircle } from "lucide-react"
// import { Button } from "../components/ui/button"
// import { Card, CardContent } from "../components/ui/card"
// import { Input } from "../components/ui/input"

// export default function ClothingUpload() {
//   const [images, setImages] = useState([])
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const fileInputRef = useRef(null)

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     designer: "",
//     price: "",
//     category: "",
//     sizes: [],
//     condition: "new",
//     availableFrom: "",
//     availableTo: "",
//   })

//   const clothingSizes = ["XS", "S", "M", "L", "XL", "XXL"]
//   const clothingCategories = ["Formal", "Casual", "Costume", "Accessories", "Shoes"]

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
//     const { name, value } = e.target
//     setForm((prev) => ({ ...prev, [name]: value }))
//   }

//   const toggleSize = (size) => {
//     setForm((prev) => {
//       if (prev.sizes.includes(size)) {
//         return { ...prev, sizes: prev.sizes.filter((s) => s !== size) }
//       } else {
//         return { ...prev, sizes: [...prev.sizes, size] }
//       }
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSuccess(true)
//       setTimeout(() => {
//         setIsSuccess(false)
//         setImages([])
//         setForm({
//           title: "",
//           description: "",
//           designer: "",
//           price: "",
//           category: "",
//           sizes: [],
//           condition: "new",
//           availableFrom: "",
//           availableTo: "",
//         })
//       }, 3000)
//     }, 2000)
//   }

//   if (isSuccess) {
//     return (
//       <div className="container py-12 md:py-24 max-w-3xl mx-auto">
//         <div className="text-center space-y-4">
//           <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto">
//             <CheckCircle className="h-8 w-8 text-primary" />
//           </div>
//           <h1 className="text-3xl font-bold">Listing Created Successfully!</h1>
//           <p className="text-muted-foreground">Your clothing item has been listed and is now available for rent.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
//             <Button asChild>
//               <Link to="/dashboard">View Your Listings</Link>
//             </Button>
//             <Button variant="outline" onClick={() => setIsSuccess(false)}>
//               Create Another Listing
//             </Button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="md:col-span-2 space-y-8">
//           {/* Image Upload Section */}
//           <Card>
//             <CardContent className="p-6">
//               <h2 className="text-xl font-bold mb-4">Upload Images</h2>
//               <p className="text-sm text-muted-foreground mb-4">
//                 Add high-quality photos to showcase your clothing item. You can upload up to 10 images.
//               </p>

//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
//                 {images.map((image, index) => (
//                   <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
//                     <img
//                       src={image.preview || "/placeholder.svg"}
//                       alt={`Upload ${index + 1}`}
//                       className="w-full h-full object-cover"
//                     />
//                     <button
//                       type="button"
//                       className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1"
//                       onClick={() => removeImage(index)}
//                     >
//                       <X className="h-4 w-4" />
//                     </button>
//                   </div>
//                 ))}

//                 {images.length < 10 && (
//                   <button
//                     type="button"
//                     className="aspect-square rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
//                     onClick={() => fileInputRef.current?.click()}
//                   >
//                     <Plus className="h-8 w-8" />
//                     <span className="text-xs">Add Photo</span>
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       accept="image/*"
//                       multiple
//                       className="hidden"
//                       onChange={handleImageUpload}
//                     />
//                   </button>
//                 )}
//               </div>

//               <div className="flex items-start gap-2 text-sm text-muted-foreground">
//                 <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
//                 <p>
//                   For best results, use high-resolution images (at least 1024x768 pixels). First image will be used
//                   as the cover photo.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Clothing Details */}
//           <Card>
//             <CardContent className="p-6">
//               <h2 className="text-xl font-bold mb-4">Clothing Details</h2>

//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="clothing-title" className="block text-sm font-medium mb-1">
//                     Item Title*
//                   </label>
//                   <Input
//                     id="clothing-title"
//                     name="title"
//                     placeholder="e.g., Designer Evening Gown"
//                     value={form.title}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="clothing-description" className="block text-sm font-medium mb-1">
//                     Description*
//                   </label>
//                   <textarea
//                     id="clothing-description"
//                     name="description"
//                     rows={5}
//                     className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                     placeholder="Describe your clothing item, including material, fit, occasions it's suitable for, etc."
//                     value={form.description}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="clothing-designer" className="block text-sm font-medium mb-1">
//                       Designer/Brand*
//                     </label>
//                     <Input
//                       id="clothing-designer"
//                       name="designer"
//                       placeholder="e.g., Vera Wang"
//                       value={form.designer}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="clothing-price" className="block text-sm font-medium mb-1">
//                       Price per Day*
//                     </label>
//                     <div className="relative">
//                       <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="clothing-price"
//                         name="price"
//                         type="number"
//                         className="pl-9"
//                         placeholder="0.00"
//                         min="0"
//                         step="0.01"
//                         value={form.price}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="clothing-category" className="block text-sm font-medium mb-1">
//                     Category*
//                   </label>
//                   <select
//                     id="clothing-category"
//                     name="category"
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                     value={form.category}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Select a category</option>
//                     {clothingCategories.map((category) => (
//                       <option key={category} value={category.toLowerCase()}>
//                         {category}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">Available Sizes*</label>
//                   <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
//                     {clothingSizes.map((size) => (
//                       <div
//                         key={size}
//                         className={`
//                           flex items-center justify-center p-2 rounded-md cursor-pointer border
//                           ${form.sizes.includes(size) ? "bg-primary/10 border-primary" : "hover:bg-muted"}
//                         `}
//                         onClick={() => toggleSize(size)}
//                       >
//                         <span>{size}</span>
//                       </div>
//                     ))}
//                   </div>
//                   {form.sizes.length === 0 && (
//                     <p className="text-xs text-red-500 mt-1">Please select at least one size</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="clothing-condition" className="block text-sm font-medium mb-1">
//                     Condition*
//                   </label>
//                   <select
//                     id="clothing-condition"
//                     name="condition"
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
//                     value={form.condition}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="new">New with tags</option>
//                     <option value="like-new">Like new</option>
//                     <option value="excellent">Excellent</option>
//                     <option value="good">Good</option>
//                     <option value="fair">Fair</option>
//                   </select>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="clothing-available-from" className="block text-sm font-medium mb-1">
//                       Available From*
//                     </label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="clothing-available-from"
//                         name="availableFrom"
//                         type="date"
//                         className="pl-9"
//                         value={form.availableFrom}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="clothing-available-to" className="block text-sm font-medium mb-1">
//                       Available To
//                     </label>
//                     <div className="relative">
//                       <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
//                       <Input
//                         id="clothing-available-to"
//                         name="availableTo"
//                         type="date"
//                         className="pl-9"
//                         value={form.availableTo}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Preview and Submit Section */}
//         <div className="md:col-span-1">
//           <div className="sticky top-24 space-y-6">
//             <Card>
//               <CardContent className="p-6">
//                 <h2 className="text-xl font-bold mb-4">Listing Preview</h2>

//                 <div className="space-y-4">
//                   {images.length > 0 ? (
//                     <div className="aspect-video rounded-md overflow-hidden">
//                       <img
//                         src={images[0].preview || "/placeholder.svg"}
//                         alt="Cover"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   ) : (
//                     <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
//                       <Upload className="h-8 w-8 text-muted-foreground" />
//                     </div>
//                   )}

//                   <div>
//                     <h3 className="font-bold truncate">{form.title || "Clothing Item Title"}</h3>

//                     <div className="mt-2">
//                       <span className="font-bold">${form.price || "0"}</span>
//                       <span className="text-sm text-muted-foreground"> / day</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-6 border-t">
//                   <h3 className="font-bold mb-2">Listing Requirements</h3>
//                   <ul className="space-y-2 text-sm">
//                     <li className="flex items-start gap-2">
//                       <CheckCircle
//                         className={`h-4 w-4 mt-0.5 ${images.length > 0 ? "text-green-500" : "text-muted-foreground"}`}
//                       />
//                       <span className={images.length > 0 ? "" : "text-muted-foreground"}>
//                         Upload at least one image
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle
//                         className={`h-4 w-4 mt-0.5 ${
//                           form.title && form.description ? "text-green-500" : "text-muted-foreground"
//                         }`}
//                       />
//                       <span className={form.title && form.description ? "" : "text-muted-foreground"}>
//                         Complete required fields
//                       </span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle
//                         className={`h-4 w-4 mt-0.5 ${form.price ? "text-green-500" : "text-muted-foreground"}`}
//                       />
//                       <span className={form.price ? "" : "text-muted-foreground"}>Set a price</span>
//                     </li>
//                     <li className="flex items-start gap-2">
//                       <CheckCircle
//                         className={`h-4 w-4 mt-0.5 ${
//                           form.sizes.length > 0 ? "text-green-500" : "text-muted-foreground"
//                         }`}
//                       />
//                       <span className={form.sizes.length > 0 ? "" : "text-muted-foreground"}>
//                         Select at least one size
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </CardContent>
//             </Card>

//             <Button
//               type="submit"
//               className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
//               disabled={
//                 isSubmitting ||
//                 images.length === 0 ||
//                 !form.title ||
//                 !form.description ||
//                 !form.price ||
//                 !form.designer ||
//                 !form.category ||
//                 form.sizes.length === 0 ||
//                 !form.availableFrom
//               }
//             >
//               {isSubmitting ? "Creating Listing..." : "Create Listing"}
//             </Button>

//             <p className="text-xs text-center text-muted-foreground">
//               By creating this listing, you agree to our{" "}
//               <Link to="#" className="text-primary hover:underline">
//                 Terms of Service
//               </Link>{" "}
//               and{" "}
//               <Link to="#" className="text-primary hover:underline">
//                 Host Policies
//               </Link>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </form>
//   )
// }

"use client"

import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { Upload, X, Plus, Info, DollarSign, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import axios from "axios"

export default function ClothingUpload() {
  const [images, setImages] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)

  const [form, setForm] = useState({
    itemName: "",
    pricePerDay: "",
    size: "",
    material: "",
    gender: "",
    brand: "",
  })

  const genders = ["Men", "Women", "Unisex"]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

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
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData()
      
      // Add the first image
      if (images.length > 0) {
        formData.append("file", images[0].file)
      }

      // Convert form data to JSON
      const clothData = {
        itemName: form.itemName,
        pricePerDay: parseFloat(form.pricePerDay),
        size: form.size,
        material: form.material,
        gender: form.gender,
        brand: form.brand,
      }
      formData.append("cloth", JSON.stringify(clothData))

      // Call the API with Axios
      const response = await axios.post("http://localhost:1234/upload-clothing", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })

      setIsSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
        setImages([])
        setForm({
          itemName: "",
          pricePerDay: "",
          size: "",
          material: "",
          gender: "",
          brand: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error uploading clothing:", error)
      setError(error.response?.data?.message || "Failed to upload clothing item")
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
          <p className="text-muted-foreground">Your clothing item has been listed and is now available for rent.</p>
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
                Add high-quality photos to showcase your clothing item. You can upload up to 10 images.
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

          {/* Clothing Details */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Clothing Details</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium mb-1">
                    Cloth Title*
                  </label>
                  <Input
                    id="item-name"
                    name="itemName"
                    placeholder="e.g., Designer Evening Gown"
                    value={form.itemName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="brand" className="block text-sm font-medium mb-1">
                      Brand*
                    </label>
                    <Input
                      id="brand"
                      name="brand"
                      placeholder="e.g., Vera Wang"
                      value={form.brand}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="price-per-day" className="block text-sm font-medium mb-1">
                      Price per Day*
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="price-per-day"
                        name="pricePerDay"
                        type="number"
                        className="pl-9"
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        value={form.pricePerDay}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium mb-1">
                      Size*
                    </label>
                    <select
                      id="size"
                      name="size"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={form.size}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select size</option>
                      {sizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium mb-1">
                      Gender*
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={form.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select gender</option>
                      {genders.map((gender) => (
                        <option key={gender} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="material" className="block text-sm font-medium mb-1">
                    Material*
                  </label>
                  <Input
                    id="material"
                    name="material"
                    placeholder="e.g., Silk, Cotton"
                    value={form.material}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm mt-2">
                    {error}
                  </div>
                )}
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
                    <h3 className="font-bold truncate">{form.itemName || "Clothing Item Name"}</h3>
                    <p className="text-sm text-muted-foreground">{form.brand || "Brand"}</p>

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
                      <span className={form.itemName ? "" : "text-muted-foreground"}>
                        Provide item name
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-4 w-4 mt-0.5 ${form.pricePerDay ? "text-green-500" : "text-muted-foreground"}`}
                      />
                      <span className={form.pricePerDay ? "" : "text-muted-foreground"}>Set a price</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        className={`h-4 w-4 mt-0.5 ${form.size ? "text-green-500" : "text-muted-foreground"}`}
                      />
                      <span className={form.size ? "" : "text-muted-foreground"}>
                        Select size
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
                !form.itemName ||
                !form.pricePerDay ||
                !form.size ||
                !form.material ||
                !form.gender ||
                !form.brand
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